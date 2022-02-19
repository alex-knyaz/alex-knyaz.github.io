/* jshint esversion: 8 */

const md = require('markdown-it')({
    html: true,
    linkify: true,
});

// Original markdown-it-katex was for some reason not 
// recognizing $ tokens if there is space before token.
// So I had to modify it. I don't know why this peace of code
// had this behavior, for some reason it was explicitly coded 
// so it might be some special case. - @alex
const mk = require('./markdown-it-katex');
const meta = require('markdown-it-meta');

md.use(mk);
md.use(require('markdown-it-highlightjs'), {});
md.use(meta);

const fs = require('fs-extra');
const path = require('path');
const recursive = require("recursive-readdir");

fs.removeSync('out');

recursive("src", function(err, files) {
    files.forEach(file => {

        if (file.indexOf('_layout.html') != -1) {
            return;
        }

        let out_path = path.join('out', ...file.split(path.sep).slice(1));

        if (path.extname(file) != '.md') {
            fs.copySync(file, out_path);
            return;
        }

        out_path = out_path.substr(0, file.lastIndexOf(".")) + ".html";


        const doc = md.render(fs.readFileSync(file, 'utf-8'));
        const meta_info = md.meta;

        console.log(file, meta_info);

        let dir_layout = path.dirname(file);

        let layout_file = '';
        while (dir_layout != '.') {
            layout_file = path.join(dir_layout, '_layout.html');
            if (!fs.existsSync(layout_file)) {
                dir_layout = path.dirname(dir_layout);
                layout_file = '';
            } else {
                break;
            }
        }

        if (layout_file == '') {
            console.error('No layout file found!');
            return;
        }

        let layout = fs.readFileSync(layout_file, 'utf-8');

        layout = layout.replace('<!--BODY-->', doc);
        Object.entries(meta_info).forEach(([k, v]) => {
            layout = layout.replace(`<!--${k}-->`, v);
        });

        fs.outputFileSync(out_path, layout);

    });
});
/**
 * Downloads SVG element as a file
 * @param svgElement - The SVG element to download
 * @param filename - Optional filename (default: 'download.svg')
 */
export const downloadSvgElement = (svgElement: SVGElement, filename: string = 'download.svg') => {
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
};

/**
 * Copies HTML element to clipboard as plain text
 * @param element - The element whose outerHTML should be copied
 * @returns Promise that resolves when copying is complete
 */
export const copyElementHtml = async (element: HTMLElement): Promise<void> => {
    try {
        await navigator.clipboard.writeText(element.outerHTML);
        console.log("HTML copied to clipboard");
    } catch (err) {
        console.error("Failed to copy HTML:", err);
        throw err;
    }
};

/**
 * Copies HTML content to clipboard as rich text
 * @param element - The element whose innerHTML should be copied as rich text
 * @returns Promise that resolves when copying is complete
 */
export const copyElementAsRichText = async (element: HTMLElement): Promise<void> => {
    try {
        const data = [
            new ClipboardItem({
                ["text/html"]: new Blob([element.innerHTML], { type: "text/html" })
            })
        ];
        await navigator.clipboard.write(data);
        console.log("Rich text copied to clipboard");
    } catch (err) {
        console.error("Failed to copy rich text:", err);
        throw err;
    }
};

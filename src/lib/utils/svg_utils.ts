export interface TextMetrics {
    lineHeight: number;
    charWidth: number;
}

/**
 * Measures text dimensions in an SVG context
 * @param svgElement The SVG element to measure text in
 * @param options Configuration options for text measurement
 * @returns TextMetrics object containing lineHeight and charWidth
 */
export function measureSvgText(
    svgElement: SVGElement,
    options: {
        fontFamily?: string;
        fontSize?: string;
        sampleText?: string;
        lineHeightMultiplier?: number;
    } = {}
): TextMetrics {
    const {
        fontFamily = "monospace",
        fontSize = "14px",
        sampleText = "X",
        lineHeightMultiplier = 1.2
    } = options;

    const tmp = document.createElementNS("http://www.w3.org/2000/svg", "text");
    tmp.setAttribute("font-family", fontFamily);
    tmp.setAttribute("font-size", fontSize);
    tmp.textContent = sampleText;

    svgElement.appendChild(tmp);
    const box = tmp.getBBox();
    svgElement.removeChild(tmp);

    return {
        lineHeight: box.height * lineHeightMultiplier,
        charWidth: box.width
    };
}

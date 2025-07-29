// src/components/portfolio-pdf-viewer.tsx

// No "use client" is needed here because this is just standard HTML.
export default function PortfolioPdfViewer() {
  return (
    <div className="w-full h-full">
      <iframe
        src="/portfolio.pdf#toolbar=0&navpanes=0&scrollbar=0"
        title="Portfolio PDF Viewer"
        className="w-full border-none rounded-lg shadow-lg"
        style={{ height: "clamp(400px, 70vh, 900px)" }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}

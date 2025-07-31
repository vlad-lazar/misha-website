"use client";
import { Worker, Viewer, ScrollMode } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function PortfolioPdfViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="w-full min-h-[400px] max-h-[900px] h-[70vh] rounded-lg shadow-lg bg-white dark:bg-gray-900 overflow-auto">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl="/portfolio.pdf"
          plugins={[defaultLayoutPluginInstance]}
          renderLoader={(percentages) => (
            <div className="flex items-center justify-center h-full">
              <span>Loading... {Math.round(percentages)}%</span>
            </div>
          )}
          initialPage={0}
          enableSmoothScroll={true}
          scrollMode={ScrollMode.Page}
        />
      </Worker>
    </div>
  );
}

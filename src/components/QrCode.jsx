"use client";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { QRCodeCanvas } from "qrcode.react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../app/globals.css";

export function QRCode({ urlParam = "" }) {
  const [url, setUrl] = useState(urlParam);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const downloadQRCode = (e) => {
    e.preventDefault();
    const canvas = document.getElementById("canvas-qr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr_code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="m-2">
      <form className="flex flex-col gap-3">
        <div className="flex flex-col items-center rounded-lg">
          <QRCodeCanvas
            id="canvas-qr"
            value={url}
            bgColor={"#000"}
            fgColor={"#fff"}
            level={"L"}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-xl mt-12 mb-4 font-light">
            Ingresa la URL
          </p>

          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <div class="rounded-xl ">
              <input
                class="py-1 px-3 w-full rounded-[22px] text-black focus:outline-none"
                type="text"
                whileFocus={{ scale: 1.2 }}
                value={url}
                placeholder="URL"
                onChange={handleChange}
              />
            </div>
          </BackgroundGradient>

          <button
            disabled={url === ""}
            onClick={downloadQRCode}
            className={`${
              url !== ""
                ? "text-center mt-6 transition-all duration-1000 ease-in-out text-white font-semibold rounded-md px-5 py-3 hover:scale-125 bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
                : "text-center mt-6 bg-slate-600 text-black font-semibold rounded-md px-5 py-3"
            }`}
          >
            Descargar QR
          </button>
          
        </div>
      </form>
    </div>
  );
}

"use client";
import { FiDownload, FiCheck } from "react-icons/fi";
import Spinner from "../Spinner";
import { useDownloader } from "@/context/Download";

const DownloadTrack = ({ track }) => {
  const { addDownload, itemState } = useDownloader();

  const handleDownload = () => {
    addDownload(track);
  };

  // Check if downloaded
  if (itemState(track) === "downloaded") {
    return (
      <div className="bg-accent/50 rounded p-1.5 md:p-2.5 text-lg">
        <FiCheck />
      </div>
    );
  }

  // Check if queued
  if (itemState(track) === "queued")
    return (
      <div className="bg-accent/10 rounded p-1.5 md:p-2.5 text-lg">
        <Spinner />
      </div>
    );

  // Check if downloading
  if (itemState(track) === "downloading") {
    return (
      <div className="bg-accent/80 rounded p-1.5 md:p-2.5 text-lg">
        <Spinner />
      </div>
    );
  }

  // Return download button
  return (
    <button
      onClick={() => handleDownload()}
      aria-label="Download Track"
      className="text-white bg-accent hover:bg-accent/90 transition-colors rounded p-1.5 md:p-2.5 text-lg"
    >
      <FiDownload />
    </button>
  );
};

export default DownloadTrack;

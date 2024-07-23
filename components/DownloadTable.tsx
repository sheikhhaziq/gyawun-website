"use client";
import { isMobile } from "react-device-detect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
function formatBytes(bytes: number, decimals = 1) {
  if (!+bytes) return "0 B";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function DownloadTable({ assets }: { assets: Asset[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">File</TableHead>
          <TableHead className="text-center">Size</TableHead>
          {!isMobile && <TableHead className="text-center">Date</TableHead>}
          <TableHead className="text-center">Download</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assets.map((asset) => (
          <TableRow key={asset.id}>
            <TableCell className="text-center">{asset.name}</TableCell>
            <TableCell className="text-center">
              {formatBytes(asset.size)}
            </TableCell>
            {!isMobile && (
              <TableCell className="text-center">
                {new Date(asset.created_at).toLocaleDateString()}
              </TableCell>
            )}
            <TableCell className="text-center">
              <a
                href={asset.browser_download_url}
                title={asset.name}
                download={asset.name}
              >
                <Button variant="link">
                  <DownloadIcon />
                </Button>
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DownloadTable;

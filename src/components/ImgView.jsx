import React from "react";
import { Button, } from "@nextui-org/button";
import DownloadBtn from "./DownloadBtn"

export default function ImgView() {

  


  return (
    <>
      <main>
        <section>
          <Button color="primary" onClick={handleDownload}>
            Download Image
          </Button>
          <img src="" alt="" />
          <div>
            <button download="" >Next</button>
            <button>Before</button>
          </div>
        </section>
      </main>
    </>
  )
}
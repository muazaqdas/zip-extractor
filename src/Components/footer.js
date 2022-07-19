import React from 'react';
import ReactTextCollapse from 'react-text-collapse/dist/ReactTextCollapse'
import "../assets/style/footer.css"

const Footer = () => {

  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: ' and 54 more', // text to show when collapsed
    expandText:'show less',
    minHeight: 0, // component height when closed
    maxHeight: 90 ,// expanded to
    textStyle: { // pass the css for the collapseText and expandText here
      color: "blue",
      fontSize: "12px",
      textAlign:"center"
    }
  }
  return (
    <>
      <footer>
        <strong>
          Supported formats:
        </strong>
        <p>
          7z, zipx, rar, tar, exe, dmg, iso, zip, msi, nrg, gz, cab, bz2, wim, ace
        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
            alz, ar, arc, arj, bin, cdi, chm, cpt, cpio, cramfs, crunch, deb, dd, dms, ext, fat, format,
            gpt, hfs, ihex, lbr, lzh, lzma, lzm, mbr, mdf, nsa, nds, nsis, ntfs, pit, pak, pdf, pp, qcow2,
            rpm, sar, squashfs, squeeze, sit, sitx, swf, udf, uefi, vdi, vhd, vmdk, warc, xar, xz, z, zoo, zi, jar
        </ReactTextCollapse>
        </p>
      </footer>
    </>
  )
}

export default Footer

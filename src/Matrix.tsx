import QRCode, { QRCodeErrorCorrectionLevel } from "qrcode";

export default ({
  value,
  errorCorrectionLevel,
}: {
  value: string;
  errorCorrectionLevel: QRCodeErrorCorrectionLevel;
}) => {
  const arr = Array.prototype.slice.call(
    QRCode.create(value, { errorCorrectionLevel: errorCorrectionLevel }).modules
      .data
  );
  const sqrt = Math.sqrt(arr.length);
  return arr.reduce(
    (rows, key, index) =>
      (index % sqrt === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );
};

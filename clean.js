import fs from 'fs';

const filePath = 'server.ts';
if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');

  const marker = "const SYSTEM_INSTRUCTION = `";
  const index = content.indexOf(marker);
  if (index === -1) {
    console.error("Marker not found!");
    process.exit(1);
  }

  const endMarker = "`.trim();";
  const endIndex = content.indexOf(endMarker, index + marker.length);
  if (endIndex === -1) {
    console.error("End marker not found!");
    process.exit(1);
  }

  const apiMarker = "// API endpoint to analyze and predict";
  const apiIndex = content.indexOf(apiMarker);
  if (apiIndex === -1) {
    console.error("API endpoint marker not found!");
    process.exit(1);
  }

  const cleanContent = content.substring(0, endIndex + endMarker.length) + "\n\n" + content.substring(apiIndex);
  fs.writeFileSync(filePath, cleanContent, 'utf8');
  console.log("Successfully cleaned server.ts!");
} else {
  console.error("server.ts does not exist!");
}

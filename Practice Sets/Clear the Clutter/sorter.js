import fs from "node:fs/promises";
import fsSync from "node:fs";

(async () => {
  try {
    const files = await fs.readdir("Clutter to Sort");
    for (const file of files) {
      let fileExtension = path.extname(file);

      if (!fsSync.existsSync(`Clutter to Sort/${fileExtension}`)) {
        await fs.mkdir(`Clutter to Sort/${fileExtension}`);
      }
      await fs.rename(
        `Clutter to Sort/${file}`,
        `Clutter to Sort/${fileExtension}//${file}`,
      );
    }
  } catch (err) {
    console.error(err);
  }
})();

import { createCanvas } from "canvas";
import fs from "fs";
import path from "path";

const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

// Background - warm white
ctx.fillStyle = "#FAF9F5";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Add subtle border
ctx.strokeStyle = "#EBE8E0";
ctx.lineWidth = 2;
ctx.strokeRect(1, 1, WIDTH - 2, HEIGHT - 2);

// Accent bar at top
ctx.fillStyle = "#B1422D";
ctx.fillRect(0, 0, WIDTH, 6);

// Main title
ctx.fillStyle = "#1C1A17";
ctx.font = "bold 72px 'PingFang SC', 'Microsoft YaHei', sans-serif";
ctx.textAlign = "center";
ctx.fillText("AutoContent", WIDTH / 2, 220);

// Subtitle
ctx.fillStyle = "#4A4640";
ctx.font = "36px 'PingFang SC', 'Microsoft YaHei', sans-serif";
ctx.fillText("AI 写公众号，从选题到发布一键搞定", WIDTH / 2, 300);

// Features
ctx.font = "28px 'PingFang SC', 'Microsoft YaHei', sans-serif";
ctx.fillStyle = "#837D72";
ctx.fillText("智能监控热点 · AI 写稿 · 自动配图 · 一键发布", WIDTH / 2, 400);

// CTA
ctx.fillStyle = "#B1422D";
ctx.font = "32px 'PingFang SC', 'Microsoft YaHei', sans-serif";
ctx.fillText("免费试用 → autocontent.net", WIDTH / 2, 520);

// Save to public folder
const buffer = canvas.toBuffer("image/png");
const outputPath = path.join(process.cwd(), "public", "og-image.png");
fs.writeFileSync(outputPath, buffer);

console.log(`OG image generated at ${outputPath}`);

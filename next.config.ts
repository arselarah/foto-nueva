// next.config.ts
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Desactiva ESLint durante el proceso de construcción
  },
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    // Añadir regla para optimizar imágenes
    config.module?.rules?.push({
      test: /\.(jpe?g|png|gif|svg)$/i, // Tipos de imágenes soportados
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
        {
          loader: "image-webpack-loader",
          options: {
            mozjpeg: {
              progressive: true,
              quality: 75, // Ajusta la calidad JPEG
            },
            optipng: {
              enabled: true, // Optimización para PNG
            },
            pngquant: {
              quality: [0.65, 0.9], // Rango de calidad para PNG
              speed: 4,
            },
            gifsicle: {
              interlaced: false, // Optimización para GIFs
            },
            webp: {
              quality: 75, // Conversión a WebP
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

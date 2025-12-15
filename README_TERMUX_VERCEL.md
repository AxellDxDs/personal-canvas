# Deploy dari Termux ke GitHub & Vercel

Panduan singkat (Bahasa Indonesia) untuk upload project ini ke GitHub dan deploy ke Vercel menggunakan Termux di Android.

## 1) Siapkan Termux

1. Buka Termux.
2. Update & install paket:
```
pkg update -y
pkg install -y git nodejs unzip curl
```

## 2) Copy / clone project ke Termux
Jika project ada di HP, pindahkan ZIP atau folder lalu unzip. Jika dari GitHub, `git clone`.

Contoh unzip:
```
unzip Personal-Canvas.zip -d Personal-Canvas
cd Personal-Canvas
```

## 3) Login GitHub (opsional menggunakan GitHub CLI)
Install `gh` jika tersedia di repo Termux:
```
pkg install gh   # jika tersedia
gh auth login
```
Atau buat repo via web lalu tambahkan remote:
```
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

## 4) Install Vercel CLI dan deploy

Install Vercel CLI:
```
npm install -g vercel
vercel login
vercel --prod
```

## 5) Skrip otomatis
Gunakan file `TERMUX_UPLOAD.sh` di root project. Contoh:
```
chmod +x TERMUX_UPLOAD.sh
./TERMUX_UPLOAD.sh nama-repo-github
```

---
File `TERMUX_UPLOAD.sh` berisi langkah-langkah otomatis (tetap butuh interaksi untuk login gh/vercel).

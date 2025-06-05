export const getFirebaseErrorMessage = (error) => {
    if (!error?.code) return "Terjadi kesalahan tidak diketahui.";

    switch (error.code) {
        // Register errors
        case "auth/email-already-in-use":
            return "Email sudah digunakan. Silakan gunakan email lain.";
        case "auth/invalid-email":
            return "Email tidak valid. Periksa kembali format email Anda.";
        case "auth/weak-password":
            return "Password terlalu lemah. Gunakan minimal 8 karakter dengan kombinasi huruf dan angka.";
        case "auth/missing-password":
            return "Password harus diisi.";
        case "auth/operation-not-allowed":
            return "Metode pendaftaran belum diaktifkan di Firebase.";

        // Login errors
        case 'auth/invalid-credential':
            return 'Kredensial tidak valid. Silakan coba login kembali.';
        case "auth/user-not-found":
            return "Pengguna tidak ditemukan. Periksa email Anda.";
        case "auth/wrong-password":
            return "Password yang Anda masukkan salah.";
        case "auth/user-disabled":
            return "Akun Anda telah dinonaktifkan. Hubungi administrator.";
        case "auth/too-many-requests":
            return "Terlalu banyak percobaan login. Silakan coba lagi nanti.";

        // Common errors
        case "auth/network-request-failed":
            return "Gagal terhubung ke jaringan. Periksa koneksi internet Anda.";
        case "auth/internal-error":
            return "Terjadi kesalahan internal. Silakan coba lagi nanti.";
        case "auth/popup-closed-by-user":
            return "Login dibatalkan oleh pengguna.";
        case "auth/cancelled-popup-request":
            return "Permintaan popup login dibatalkan.";
        case "auth/account-exists-with-different-credential":
            return "Akun sudah ada dengan kredensial yang berbeda.";

        default:
            return error.message || "Terjadi kesalahan. Silakan coba lagi.";
    }
};

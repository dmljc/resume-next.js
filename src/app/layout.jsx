import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { I18nProvider } from "../lib/i18n";
import "../index.css";

export const metadata = {
    title: "Resume",
    description: "My Resume",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body className="font-sans">
                <I18nProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}

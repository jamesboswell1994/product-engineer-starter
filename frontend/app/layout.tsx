import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

interface IRootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
    const { children } = props;

    return (
        <html lang="en">
            <head></head>
            <body>
                {children}
                <ToastContainer />
                <div id="modal" />
            </body>
        </html>
    );
}

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

function Layout({ children }) {
	return (
		<div className="bg-[#EDF2F4]">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
export default Layout;

import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import MyExpenses  from "../components/expenses";

const Expenses=()=>{
    return(
        <>
        <Head>
          <title>Split-Expenses</title>
          <meta
            name="description"
            content="Split Expenses app is used for sharing the expenses with our friends."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <MyExpenses/>
        <Footer />
        <PopupWidget />
        </>
    );
}
export default Expenses;
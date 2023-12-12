import DeliveryInfo from "../../components/small_components/delivery_info/delivery_info"
import BillInfo from "../../components/small_components/bill_info/bill_info"
import Header from "../../components/big_components/header/header"
import "./pay_page.scss"

const PayPage = () => {
    return (
        <main className="pay-page">
            <section className="delivery">
                <DeliveryInfo name="Phan Cong Hau" address="Go Vap, TP.HCM" phoneNumber="0777859669"/>
            </section>
            <section className="bill">
                <BillInfo/>
            </section>
        </main>
    )
}

export default PayPage
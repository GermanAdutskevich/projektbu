import React, {useState, useEffect} from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import DatePicker from "react-datepicker";
import pl from "date-fns/locale/pl";
import { registerLocale } from  "react-datepicker";
import { withAuthorization } from '../Session';
// import firebase from "firebase";
import 'firebase/firestore';
import Firebase from "../../Firebase";
import * as ROUTES from "../../constants/routes";
import data from '../../data.json';
import moment from "moment";
registerLocale('pl', pl)

function AddEvent (props) {
    const [details, setDetails] = useState('Kapitał (fundusz) podstawowy');
    const [components, setComponents] = useState('Kapitał włąsny');
    const [amount, setAmount] = useState(parseFloat());
    const [currencies, setCurrencies] = useState('');
    const [docnum, setDocnum] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [list, setList] = useState([]);
    const stringDate = moment(startDate).format('DD/MM/YYYY');
    const [sumamount,setSumamount] = useState([0]);


    const Components = [
        {
            label: "Kapitał własny",
            value: "Kapitał własny",
        },
        {
            label: "Kapitał obcy",
            value: "Kapitał obcy",
        },
    ];

    const Details = [
        {
            label: "Kapitał (fundusz) podstawowy",
            value: "Kapitał (fundusz) podstawowy",
        },
        {
            label: "Kapitał (fundusz) zapasowy",
            value: "Kapitał (fundusz) zapasowy",
        },
        {
            label: "Pozostały kapitał (fundusz) rezerwowy",
            value: "Pozostały kapitał (fundusz) rezerwowy",
        },
        {
            label: "Zysk (strata) z lat ubiegłych",
            value: "Zysk (strata) z lat ubiegłych",
        },
        {
            label: "Zysk (strata) netto",
            value: "Zysk (strata) netto",
        },
        {
            label: "Rezerwy na zobowiązania",
            value: "Rezerwy na zobowiązania",
        },
        {
            label: "Zobowiązania długoterminowe",
            value: "Zobowiązania długoterminowe",
        },
        {
            label: "Zobowiązania krótkoterminowe",
            value: "Zobowiązania krótkoterminowe",
        },
        {
            label: "Rozliczenia międzyokresowe",
            value: "Rozliczenia międzyokresowe",
        },
    ];

    const Currencies = [
        {
            value: 'choose',
            label: 'Wybierz walutę'
        },
        {
            value: 'USD',
            label: '$'
        },
        {
            value: 'EUR',
            label: '€'
        },
        {
            value: 'PLN',
            label: 'zł'
        },
        {
            value: 'BTC',
            label: '฿'
        },
        {
            value: 'JPY',
            label: '¥'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetails('Kapitał (fundusz) podstawowy');
        setComponents('Kapitał własny')
        setAmount(parseFloat());
        setDocnum('');
        setDescription('');
        const data = {
            // 'id': 'id' + (new Date()).getTime() + '' + Math.random(),
            components:components,
            details: details,
            amount: parseFloat(amount),
            currencies: currencies,
            date: startDate,
            docnum: docnum,
            description: description,
            stringDate:stringDate
        }

        const newListassets = [...list, data];
        setList(newListassets);

        const sumAssets = newListassets.reduce(function (cnt,o){return cnt + o.amount}, 0);
        setSumamount(sumAssets);

        localStorage.setItem('actions-pas', JSON.stringify(newListassets));
    };

    useEffect(() => {
        // fetch('gs://projektbu-55d22.appspot.com/data.json')
        //     // .then(r => r.json())
        //     .then(r => {
        //         console.log(r);
        //     })
        //     .error(r => {
        //         console.log(r)
        //     })

        // Firebase.db.collection("actions").onSnapshot(snapshot => {
        //     console.log(snapshot)
        // })

        const actionsList = JSON.parse(localStorage.getItem('actions-pas'))

        setList(actionsList ? actionsList : []);
    },[]);


    return(<>
            <Header/>
            <form noValidate
                  autoComplete='off' className="form_user" id="form1" onSubmit={handleSubmit}>
                <div className="container-user">
                    <div className="balance-user">
                        <h1 className="title_user">Pasywa</h1>
                        <label>Jaki rodzaj?</label>
                        <select id="main_select" className="select_user" onChange={e => setComponents(e.target.value)} value={components}>
                            {Components.map((component) => (
                                <option value={component.value} className="">{component.label}</option>
                            ))}
                        </select>
                        <label>A dokładniej?</label>
                        <select id="type-select" className="select_user" onChange={e => setDetails(e.target.value)} value={details}>
                            {Details.map((component) => (
                                <option value={component.value}>{component.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="balance-user">
                        <input id="amount" type='number' name="amount" onChange={e => setAmount(e.target.value.replace(/^[-+]?$/, ""))} value={amount} className="input_user" required placeholder="Wpisz kwotę"/>
                        <select id="currency" className="select_user" onChange={e => setCurrencies(e.target.value)} value={currencies}>
                            {Currencies.map((component) => (
                                <option value={component.value}>{component.label}</option>
                            ))}
                        </select>
                        <input id="doc-num" className="input_user" onChange={e => setDocnum(e.target.value)} value={docnum} required placeholder="Wpisz numer dokumentu"/>
                        <DatePicker
                            className='form-control input_user'
                            placeholderText='Wybierz date'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            locale="pl"
                            timeCaption='Czas'
                            // showTimeSelect
                            timeIntervals={5}
                            dateFormat="dd-MM-yyyy"
                        />
                    </div>
                    <div className="balance-user">
                        <input id="description"  onChange={e => setDescription(e.target.value)} value={description} className="input_user" required placeholder="Opis transakcji"/>
                    </div>
                    <button type="submit" form="form1" className="btn_user" onSubmit={handleSubmit}>Dodaj zdarzenie</button>
                </div>
            </form>
            <table className="table table-hover container table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Kategoria</th>
                    <th scope="col">Kwota</th>
                    <th scope="col">Numer dokumentu</th>
                    <th scope="col">Data transakcji</th>
                    <th scope="col">Opis</th>
                </tr>
                </thead>
                <tbody>
                    {list.map(list => (
                        <tr>
                            <th scope="col">{list.components} - {list.details}</th>
                            <th scope="col">{list.amount}</th>
                            <th scope="col">{list.docnum}</th>
                            <th scope="col">{list.stringDate}</th>
                            <th scope="col">{list.description}</th>
                        </tr>
                    ))}
                <tr>
                    <th className="bg-dark text-white" scope="col">Wynik</th>
                    <th className="bg-dark text-white" scope="col">{sumamount}</th>
                </tr>
                    {/*<button id="deleteall" onClick={localStorage.removeItem('actions')}>Usun wszystko</button>*/}
                </tbody>
            </table>

            <Footer/>
        </>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AddEvent);
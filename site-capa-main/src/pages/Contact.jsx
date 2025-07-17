import Map from "../components/Map";
import HighlightedText from "../components/HighlightedText";
import { Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Instagram } from "lucide-react";
import ScrollToTop from "../components/ScrollToTop";
import contacts from "../data/list-contacts";
import L from 'leaflet';
import blueMarkerImg from '../assets/map/marker-icon-2x.png';
import blueMarkerShadowImg from '../assets/map/marker-shadow.png';
import { Trans, useTranslation } from "react-i18next";

// TODO: Bouton Copier
// TODO: Rounded Map
// TODO: Map qui bouge selon l'adresse en hover
// TODO: Photo profil


const Contact = () => {

    const blueMarker = new L.icon({
        iconUrl: blueMarkerImg,
        shadowUrl: blueMarkerShadowImg,
        iconSize: [24,36],
        iconAnchor: [12,36],
        shadowAnchor: [12,42]
    });

    const [currentModalContact, setCurrentModalContact] = useState(contacts['sami']);
    const openModal = (idContact) => {
        setCurrentModalContact(contacts[idContact]);
        document.getElementById(`modal_contact`).showModal();
    };

    const mapCoordinates = ['lavoiz', 'descartes', 'condo', 'bourseul', 'lahure'];

    const mailBug = 'clarisse.borgne@etu.imt-nord-europe.fr';

    const { t } = useTranslation();

    return (
        <>
        <ScrollToTop />
        <div className="mt-8 mb-12 flex flex-col md:flex-row w-full gap-x-10 px-8 max-w-6xl mx-auto" >
            <div className="md:w-1/2">
                <MiniContactList 
                    title={ t('contact.capa.titre') }
                    description={ t('contact.capa.texte') }
                    contactIdList={['sami', 'zoe', 'nathan', 'manon']}
                    openModal={(idContact) => openModal(idContact)}
                />
                <MiniContactList
                    title={ t('contact.vss.titre') }
                    description={ t('contact.vss.texte') }
                    contactIdList={['remi', 'mathilde', 'zoe-vss', 'andre', 'anneso', 'vincent']}
                    openModal={(idContact) => openModal(idContact)}
                />
                <MiniContactList
                    title={ t('contact.admin.titre') }
                    description={ t('contact.admin.texte') }
                    contactIdList={['hadoux', 'haire']}
                    openModal={(idContact) => openModal(idContact)}
                />
            </div>
            <div className="md:w-1/2">
                <MiniContactList 
                    title={ t('contact.admisseurs.titre') }
                    description={ t('contact.admisseurs.texte') }
                    contactIdList={['laura', 'louison', 'elia', 'adam']}
                    openModal={(idContact) => openModal(idContact)}
                />
                <MiniContactList
                    title={ t('contact.adresses.titre') }
                    description={ t('contact.adresses.texte') }
                    contactIdList={['lavoiz', 'descartes', 'condo', 'bourseul', 'lahure']}
                    openModal={(idContact) => openModal(idContact)}
                >
                    <Map className='mt-6 h-96' >
                        { mapCoordinates.map((idContact, index) => (
                            <Marker key={index} icon={ blueMarker } position={contacts[idContact].coordinates}>
                                <Popup>
                                    <b>{ contacts[idContact].name }</b> - <em>{ contacts[idContact].description }</em><br/><span className="text-neutral-500">{ contacts[idContact].adresse }</span>
                                </Popup>
                            </Marker>
                        ))}
                    </Map>
                </MiniContactList>
            </div>
        </div>
        <div className="text-secondary text-center w-full mb-12">
            <Trans 
                t={t}
                i18nKey='contact.bug'
                values={{ mail: mailBug }}
                components={{
                    mailBug: <a className='underline' href={`mailto:${mailBug}`}/>
                    }} 
                />
        </div>
        <InfosContact contact={ currentModalContact } />
        </>
    );
};


const MiniContactList = ({ title, contactIdList, openModal, description, children }) => {
    return (
        <>
        <HighlightedText className='text-3xl md:text-5xl text-center font-extrabold font-title mx-auto mb-8 mt-12 w-max'>{ title }</HighlightedText>
        <div className='text-center text-neutral-500 mb-4'>
            { description }
        </div>
        <div className="flex flex-col gap-3">
            { contactIdList.map((contactId, index) => 
                <BoutonContact key={index} contact={ contacts[contactId] } onClick={ () => openModal(contactId) } />
            )}
        </div>
        { children }
        </>
    )
}


const BoutonContact = ({ contact, onClick }) => {

    return (
        <>
        <button className="group bg-secondary/20 hover:bg-secondary/40 py-2 px-4 w-full rounded-xl text-left hover:shadow-md hover:shadow-[#fde047]/30 outline outline-0 hover:outline-1 outline-[#fde047] transition-all duration-75" onClick={ onClick }>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <div className="text-lg font-bold line-clamp-1">{ contact.name }</div>
                    <div className="flex flex-row items-center gap-4 mr-1">
                        {contact.tel && (<Mail strokeWidth={2.5} />)}
                        {contact.email && (<Phone strokeWidth={2.5} />)}
                        {contact.insta && (<Instagram strokeWidth={2.5} />)}
                        {contact.adresse && (<MapPin strokeWidth={2.5}/>)}
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <span className="text-neutral-500 transition-all duration-200">{ contact.description }</span>
                    <div className="flex flex-row items-end gap-1 opacity-0 group-hover:opacity-100 group-hover:ml-4 mr-4 group-hover:mr-0 transition-all duration-200">
                        <span className="link link-primary">Voir plus</span>
                        <ArrowRight className="text-[#fde047] size-5"/>
                    </div>
                </div>
            </div>
        </button>
        </>
    );
}


const InfosContact = ({ contact }) => {
    return (
        <>
        <dialog id={`modal_contact`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="flex flex-row gap-5 items-center">
                    <HighlightedText className="font-bold text-xl">{ contact.name }</HighlightedText>
                    <p className="text-neutral-500">-  { contact.description }</p>
                </div>
                <div className="py-5 leading-relaxed">
                    { contact.img && <img src={ contact.img } className="hidden sm:block size-24 float-end rounded-full shadow-md ml-4 mr-0 mb-1"/> }
                    { contact.tel && <p>
                        <span className="font-bold">Téléphone : </span>
                        <a href={`tel:${contact.tel}`} className="link brightness-90 link-primary">{ contact.tel }</a>
                    </p> }
                    { contact.email && <p>
                        <span className="font-bold">E-mail : </span>
                        <a href={`mailto:${contact.email}`} className="link brightness-90 link-primary">{ contact.email }</a>
                    </p> }
                    { contact.insta && <p>
                        <span className="font-bold">Instagram : </span>
                        <a href={`https://www.instagram.com/${contact.insta.substring(1)}`} className="link brightness-90 link-primary">{ contact.insta }</a>
                    </p> }
                    { contact.adresse && <p>
                        <span className="font-bold">Adresse : </span>
                        <a href={`https://maps.google.com/?q=${encodeURI(contact.adresse)}`} className="link brightness-90 link-primary">{ contact.adresse }</a>
                    </p> }
                    { contact.img && <img src={ contact.img } className="sm:hidden size-32 rounded-full shadow-md mx-auto mt-4"/> }
                </div>
            </div>
        </dialog>
        </>
    );
}

export default Contact;
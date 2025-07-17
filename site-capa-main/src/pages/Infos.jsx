import Book from "../components/Book";
import HighlightedText from "../components/HighlightedText";
import coverGuideMeudien from "../assets/guide/guide-meudien-cover.jpg";
import coverMeudiansGuide from "../assets/guide/meudians-guide-cover.jpg";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import { useTranslation, Trans } from "react-i18next";
import links from "../data/links";

const Infos = () => {

    const faq = [
        {
            question:"Comment vont se passer tes 3 semaines d'intégration ?",
            response:<>
                À ton arrivée, tu seras affécté.e à une équipe parmi les 10 en liste. L&apos;objectif sera de remporter le plus de points en réussissant les défis quotidiens. Alors prépare toi, champion.ne !
            </>
        },
        {
            question:"Est-ce que ton intégration sera “normale” ?",
            response:<>
                Malheureusement nous ne lisons pas l&apos;avenir mais sache que les scénarios les plus positifs comme les plus négatifs ont été envisagés pour que dans tous les cas tu passes une inté de folie ! Rassure-toi, le bizutage est proscrit par la loi donc il n&apos;y aura pas de tout ça à ton inté !
            </>
        },
        {
            question:"Comment sont les logements de la MEUD ?",
            response:<>
                Tu peux avoir un premier aperçu des logements que propose l&apos;école à Douai dans le Guide du Meudien.
                Toutefois, les visites virtuelles seront peut-être plus parlantes alors rends-toi dans la page <Link to='/douai' className="link link-primary">La vie à Douai</Link>.
                <div className="text-sm mt-3">Tu pourras avoir des informations supplémentaires en te rendant sur le site de IMT Nord Europe dans <em>Expérience étudiante</em> puis <em>Logement</em> : <a href='https://imt-nord-europe.fr/experience-etudiante/logements/' className="link link-primary">Page Hébergement</a></div>
            </>
        },
        {
            question:"Comment loger à la MEUD ?",
            response:<>
                Pour loger à la MEUD, les résidences de IMT Nord Europe à Douai, il faut que tu sois inscrit.e administrativement à l&apos;école. Celle-ci te communiquera tes identifiants pour te connecter à leur plateforme <a href='https://myservices.imt-lille-douai.fr/' className="link link-primary">MyServices</a> IMT Nord-Europe. Une fois connecté, clique sur l&apos;icône <em>“Hébergement”</em> où tu pourras te pré-inscrire. Les préinscriptions seront disponibles début juillet.
            </>
        },
        {
            question:"Que se passe-t-il si tu ne loges pas à la MEUD ?",
            response:<>
                Mince, nous n&apos;avons pas réussi à te convaincre de venir avec nous…<br/>
                Sache que ta carte te permettra d&apos;accéder aux résidences jusqu&apos;à 20h45. Tu n&apos;auras pas accès au garage à voiture. Tu pourras bien évidemment tout de même te rendre à la restauration de l&apos;école qui se trouve dans la résidence Lavoisier.
            </>
        },
        {
            question:"Tu as une voiture et tu souhaites avoir accès au garage souterrain ?",
            response:<>
                C&apos;est possible pour 29 euros par mois si tu es résident de la MEUD.
            </>
        },
        {
            question:"Douai, c'est vraiment si éclaté que ça ?",
            response:<>
                Aaaaahhhh cette fameuse question, bon nombre d&apos;étudiants se la sont posée avant toi. Si Douai n&apos;est pas la ville la plus dynamique dans laquelle tu as pu te rendre, elle est une ville de province où il est agréable de se balader le long de la Scarpe.<br/>
                Mais fillot.e n&apos;oublie pas que l&apos;important n&apos;est pas là. L&apos;ambiance de l&apos;école te fera oublier ce que tu penses être les inconvénients du Nord. Enfin, sache que dans le Nord on y pleure deux fois : quand on arrive et quand on part.
            </>
        },
        {
            question:"Quelle est la charge de travail ?",
            response:<>
                Difficile d&apos;évaluer car ça dépend de chacun. Un travail régulier suffit pour réussir les DS, tu n&apos;auras pas besoin de travailler 3h tous les soirs mais fais attention fillot.e car tes notes de L3 sont très importantes pour ton dossier pour les universités étrangères. De plus, ton classement te donnera la priorité (ou non) pour les modules au sein de l&apos;école.
            </>
        },
        {
            question:"Des modules d'ouverture de L3 à conseiller/déconseiller ?",
            response:<>
                Non, tout dépend de ce que tu aimes. N&apos;hésite pas à parler de ce genre de sujet avec ton parrain ou ta marraine, il est là pour ça.
            </>
        },
        {
            question:"Est ce que la cantine est bonne ?",
            response:<>
                Ne t&apos;en fais pas tu mangeras à ta faim fillot.e ! Nos chefs cuisiniers répondent toujours présents pour te concocter de bons plats équilibrés avec plusieurs options à chaque fois, même les végétariens seront satisfaits !
            </>
        },
    ]

    const { t, i18n } = useTranslation();


    return (
        <>
        <ScrollToTop />
        <div className="flex flex-col w-full max-w-5xl mx-auto mt-12 mb-24 px-6 items-center md:items-start gap-8">
            <HighlightedText className='text-3xl mb-6 md:text-5xl text-center font-extrabold font-title mx-auto'>{ t('infos.guide.titre') }</HighlightedText>
            <div className="flex flex-col items-center md:items-start text-center md:text-start md:flex-row leading-relaxed text-pretty w-full">
                <div>
                    <Trans t={t} i18nKey='infos.guide.texte' /><br/>
                    <Trans t={t} i18nKey='infos.guide.liste.intro' />
                    <ul className="list-inside list-disc leading-loose ml-2 my-2">
                        <li className="text-primary"><span className="text-neutral">
                            <Trans t={t} i18nKey='infos.guide.liste.affaires' />
                        </span></li>
                        <li className="text-primary"><span className="text-neutral">
                            <Trans t={t} i18nKey='infos.guide.liste.dates' />
                        </span></li>
                        <li className="text-primary"><span className="text-neutral">
                            <Trans t={t} i18nKey='infos.guide.liste.chambres' />
                        </span></li>
                        <li className="text-primary"><span className="text-neutral">
                            <Trans t={t} i18nKey='infos.guide.liste.conseils' />
                        </span></li>
                    </ul>
                    <Trans t={t} i18nKey='infos.guide.cta' /><br/>
                    <a href={ i18n.language=='en' ? links.meudianGuide : links.guideMeudien } target="_blank" className="group btn btn-primary items-center mt-6 hidden md:inline-flex">
                        { t('infos.guide.btn') }
                        <ArrowRight size={20} className="group-hover:ml-2 transition-all duration-150"/>
                    </a>
                </div>
                <a href={ i18n.language=='en' ? links.meudianGuide : links.guideMeudien } target="_blank" className="md:ml-10 mt-10 md:mt-0 shrink-0 w-[18rem]">
                    <Book className='mx-auto' cover={ i18n.language=='en' ? coverMeudiansGuide : coverGuideMeudien }/>
                </a>
                <a className="group btn btn-primary w-full max-w-96 mt-6 inline-flex md:hidden">
                    { t('infos.guide.btn') }
                </a>
            </div>
        </div>
        <div className="flex flex-col w-full max-w-5xl mx-auto mt-12 mb-24 px-6 items-center md:items-start gap-8">
            <HighlightedText className='text-3xl mb-6 md:text-5xl text-center font-extrabold font-title mx-auto'>{ t('infos.residence.titre') }</HighlightedText>
            <div className="text-center leading-relaxed">
                <Trans t={t} i18nKey='infos.residence.texte' />
            </div>
            <VideoPlayer ytId='yOz4N0QTf3M' className='rounded-3xl' disableAutoplay />
            <div className="flex flex-col-reverse md:flex-row gap-4 items-center w-full justify-center">
                <Link to='/douai' className="btn btn-primary w-full max-w-96 md:w-auto">{ t('infos.residence.btn.douai') }</Link>
                <Link to='/videos' className="btn btn-secondary w-full max-w-96 md:w-auto">{ t('infos.residence.btn.videos') }</Link>
                <Link to='/equipe' className="btn btn-secondary w-full max-w-96 md:w-auto">{ t('infos.residence.btn.equipe') }</Link>
            </div>
        </div>
        <div className="flex flex-col w-full max-w-5xl mx-auto mt-12 mb-24 px-6 items-center md:items-start gap-8">
            <HighlightedText className='text-3xl mb-6 md:text-5xl text-center font-extrabold font-title mx-auto'>{ t('infos.faq.titre') }</HighlightedText>
            <div className="text-center leading-relaxed">
                <Trans t={t} i18nKey='infos.faq.texte' />
            </div>
            <div className="flex flex-col w-full gap-4">
                { faq.map((f, i) => (<>
                    <div key={i} className="collapse collapse-arrow bg-secondary/35">
                        <input type="radio" name="faq" /> 
                        <div className="collapse-title text-lg font-medium inline-flex gap-3 items-center">
                            <MessageCircleQuestion className="w-6 shrink-0" size={20} strokeWidth={2.3}/>
                            { f.question }
                        </div>
                        <div className="collapse-content text-neutral/80 text-pretty"> 
                            <p>{ f.response }</p>
                        </div>
                    </div>
                </>))}
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-4 items-center w-full justify-center">
                <Link to='/contact' className="btn btn-primary w-full max-w-96 md:w-auto">{ t('infos.faq.btn.contact') }</Link>
                <a href={ i18n.language=='en' ? links.meudianGuide : links.guideMeudien } className="btn btn-secondary w-full max-w-96 md:w-auto">{ t('infos.faq.btn.contact') }</a>
                <Link to='/douai' className="btn btn-secondary w-full max-w-96 md:w-auto">{ t('infos.faq.btn.contact') }</Link>
            </div>
        </div>
        </>
    );
}

export default Infos;
import { Link, useNavigate, useLocation } from 'react-router-dom';
import wipIcon from '../assets/wip.svg'
import ScrollToTop from '../components/ScrollToTop';
import { useTranslation } from 'react-i18next';

const WorkInProgress = ({ pageName }) => {

    const { t } = useTranslation();

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
        <ScrollToTop />
        <div className="hero min-h-[calc(100vh-4rem)]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src={ wipIcon } className='max-w-sm'></img>
                <div>
                    <h1 className="text-5xl font-subtitle">{pageName}</h1>
                    <h1 className="text-5xl font-bold">{ t('wip.titre') }</h1>
                    <p className="py-6">{ t('wip.explication') }</p>
                    {location.pathname === "/wei" && (
                        <ul className="list-disc ml-6 mt-4">
                            <li>Un sac de couchage</li>
                            <li>Une tenue de sport</li>
                            <li>Des vêtements qui ne craignent rien</li>
                            <li>Un déguisement rigolo</li>
                            <li>Et ta bonne humeur !</li>
                        </ul>
                    )}
                    <div className="flex gap-6">
                        <btn onClick={() => navigate(-1)} className="btn btn-primary">{ t('wip.retour') }</btn>
                        <Link to='/' className="btn btn-secondary">{ t('wip.accueil') }</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default WorkInProgress;
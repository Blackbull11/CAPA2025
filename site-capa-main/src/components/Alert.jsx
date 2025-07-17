import { useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";
import { TriangleAlert } from "lucide-react";

const Alert = () => {
    const { alert, displayAlert } = useContext(AlertContext);
    /*const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        }, 2000)
        return () => {clearTimeout(timeoutId)}
    }, [alert])*/

    return (
        <>
        <div className={`transition-all duration-300 toast ${displayAlert ? 'opacity-100' : 'opacity-0'}`}>
            <div className="alert bg-accent">
                <TriangleAlert strokeWidth={2.5} />
                <span className="font-bold">{ alert }</span>
            </div>
        </div>
        </>
    );
}

export default Alert;
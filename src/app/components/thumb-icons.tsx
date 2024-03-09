import { FaThumbsDown } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";

/**
 * Renders a thumbs-up icon with customizable color.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props._OnOrOff - Determines whether the thumbs-up icon should be on or off.
 * @returns {JSX.Element} The rendered thumbs-up icon.
 */
const ThumbsUp = (props: { _OnOrOff: boolean }): JSX.Element => {
    return (
        <>
            {
                props._OnOrOff ? <FaThumbsUp color="#22C55E" size={24} /> : <FaThumbsUp color="#9CA3AF" size={24} />
            }
        </>
    )
}

/**
 * Renders a thumbs-down icon with customizable color.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props._OnOrOff - A boolean indicating whether the thumbs down icon should be on or off.
 * @returns {JSX.Element} The rendered thumbs-down icon.
 */
const ThumbsDown = (props: { _OnOrOff: boolean }): JSX.Element => {
    return (
        <>
            {
                props._OnOrOff ? <FaThumbsDown color="#22C55E" size={24} /> : <FaThumbsDown color="#9CA3AF" size={24} />
            }
        </>
    )
}

export { ThumbsUp, ThumbsDown };
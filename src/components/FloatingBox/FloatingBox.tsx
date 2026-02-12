import './FloatingBox.scss'

type Props = {
    title: string,
    subtitle: string,
    datesString: string,
    content: React.ReactNode,
}

const FloatingBox = ({ title, subtitle, datesString, content }: Props) => {
    return <div className="FloatingBox">
        <div className="box-heading-flex">
            <span className="FloatingBox-titling">
                <h2 className="FloatingBox-title">{title}</h2>
                <h2>{subtitle}</h2>
            </span>
            <h2>{datesString}</h2>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default FloatingBox;
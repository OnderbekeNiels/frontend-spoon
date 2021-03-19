import '../../styles/05-objects/container.scss';

const Container = (props: any) => {
    return (
        <div className={`o-container ${props.className ? props.className : ''}`}>
            { props.children}
        </div>
    )
}

export default Container;
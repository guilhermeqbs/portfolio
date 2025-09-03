import srcAvatar from '../../assets/avatar-cut.JPEG'

function Avatar() {
    return (  
        <img 
            src={srcAvatar}
            alt="Avatar" 
            className="transition hover:translate-y-1 hover:scale-105 rounded-full border-2 border-gray-200 shadow-lg w-48 h-48"
        />
    );
}

export default Avatar;

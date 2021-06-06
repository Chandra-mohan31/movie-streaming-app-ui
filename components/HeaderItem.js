function HeaderItem({title,Icon}) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
            <Icon className="group-hover:animate-bounce h-8 mb-1 text-white"   />
            <p className="opacity-0 group-hover:opacity-100 sm:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem

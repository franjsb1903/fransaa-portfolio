const TitleSection = ({ children }: { children: string }) => {
  return (
    <div className="w-full text-center border-b-2 border-gray-400">
      <h3
        className="font-extrabold 
                          text-transparent 
                          text-3xl 
                          sm:text-4xl
                          bg-clip-text 
                          bg-gradient-to-r 
                          from-violet-300
                          dark:from-white
                          dark:via-violet-500 
                          to-violet-900 
                          py-2 
                          uppercase"
      >
        {children}
      </h3>
    </div>
  );
};

export default TitleSection;

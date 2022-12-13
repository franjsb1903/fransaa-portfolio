const TitleSection = ({ children }: { children: string }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <h3
        className="font-extrabold 
                          text-transparent 
                          text-3xl 
                          sm:text-4xl
                          bg-clip-text 
                          bg-gradient-to-r 
                          from-violet-300
                          dark:from-violet-500 
                          dark:to-pink-900 
                          to-violet-900 
                          py-2 
                          uppercase
                          cursor-default"
      >
        {children}
      </h3>
      <div className="w-48 border-b-4 border-violet-400"></div>
    </div>
  );
};

export default TitleSection;

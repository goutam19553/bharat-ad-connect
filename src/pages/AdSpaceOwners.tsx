<div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white dark:bg-gray-900 dark:text-white">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Turn Your Space into Income
        </h1>
        <p className="text-xl text-gray-300 mb-8 dark:text-gray-400">
          List your advertising spaces on Bharat-Ad and connect with quality advertisers from across India.
        </p>
        <Link to="/contact" className="btn-primary">
          List Your Ad Space
        </Link>
      </div>
      <div className="hidden lg:block">
        <img 
          src="https://source.unsplash.com/photo-1501854140801-50d01698950b" 
          alt="Building with advertisement space" 
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  </div>
</div>

<section className="section bg-white dark:bg-gray-800">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-white">
        Why List Your Space With Bharat-Ad
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
        Our platform connects you with verified advertisers, maximizing the value of your space
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg card-hover dark:bg-gray-700 dark:text-white">
          <div className="mb-4">{benefit.icon}</div>
          <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="section bg-gray-50 dark:bg-gray-800">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-white">
        Types of Ad Spaces We Accept
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
        From traditional billboards to digital displays, we connect all types of advertising spaces with potential advertisers
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {spaceTypes.map((type, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover dark:bg-gray-700">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-2/5">
              <img 
                src={type.image} 
                alt={type.title} 
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-heading font-semibold mb-2 dark:text-white">{type.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{type.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

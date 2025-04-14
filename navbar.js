const navVeriant=[
  
    { 
      Variant: `<div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-medium text-gray-900">Simple dark with menu button on left</h3>
      </div>
      
      <div class="bg-white rounded-lg shadow overflow-hidden mb-4">
        <div class="p-4 border-b border-gray-200 flex justify-between items-center">
          <div class="flex gap-3">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button onclick="toggleCode('code1')" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View code
          </button>
        </div>
        
        <div class="preview-container p-6 bg-gray-900">
          <!-- Preview -->
          <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div class="relative flex items-center justify-between h-16">
                <!-- Mobile menu button-->
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div class="flex-shrink-0 flex items-center">
                    <span class="text-white font-bold text-lg">NimbusUI</span>
                  </div>
                  <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                      <a  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                      <a  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                      <a  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                      <a  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden hidden" id="mobile-menu">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a  class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                <a  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                <a  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
              </div>
            </div>
          </nav>
        </div>
      </div>`
    },
    {  
      Variant: `<div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-medium text-gray-900">Light with search and dropdown</h3>
      </div>
      
      <div class="bg-white rounded-lg shadow overflow-hidden mb-4">
        <div class="p-4 border-b border-gray-200 flex justify-between items-center">
          <div class="flex  gap-3">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button onclick="toggleCode('code2')" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View code
          </button>
        </div>
        
        <div class="preview-container p-6 bg-white">
          <!-- Preview -->
          <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between h-16">
                <div class="flex">
                  <div class="flex-shrink-0 flex items-center">
                    <span class="text-xl font-bold text-gray-900">NimbusUI</span>
                  </div>
                  <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a  class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Dashboard</a>
                    <a  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Team</a>
                    <a  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Projects</a>
                    <a  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Calendar</a>
                  </div>
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:items-center">
                  <div class="relative max-w-xs">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search">
                  </div>

                  <!-- Profile dropdown -->
                  <div class="ml-3 relative">
                    <div>
                      <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open user menu</span>
                        <img class="h-8 w-8 object-cover rounded-full" src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="">
                      </button>
                    </div>
                    
                    <!-- Dropdown menu -->
                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      <a  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                      <a  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                      <a  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                    </div>
                  </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="-mr-2 flex items-center sm:hidden">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Mobile menu -->
            <div class="sm:hidden hidden" id="mobile-menu-2">
              <div class="pt-2 pb-3 space-y-1">
                <a  class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dashboard</a>
                <a  class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Team</a>
                <a  class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>
                <a  class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Calendar</a>
              </div>
              <div class="pt-4 pb-3 border-t border-gray-200">
                <div class="flex items-center px-4">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="ml-3">
                    <div class="text-base font-medium text-gray-800">Tom Cook</div>
                    <div class="text-sm font-medium text-gray-500">tom@example.com</div>
                  </div>
                </div>
                <div class="mt-3 space-y-1">
                  <a  class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your Profile</a>
                  <a  class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</a>
                  <a  class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign out</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
      </div>`
    },
    { 
      Variant: `<div class="flex justify-between items-center mb-4">
    <h3 class="text-xl font-medium text-gray-900">Centered logo with split navigation</h3>

    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden mb-4">
    <div class="p-4 border-b border-gray-200 flex justify-between items-center">
    <div class="flex  gap-3">
    <div class="w-3 h-3 rounded-full bg-red-500"></div>
    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <button onclick="toggleCode('code3')" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
    View code
    </button>
    </div>

    <div class="preview-container p-6 bg-white">
    <!-- Preview -->
    <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <!-- Left navigation -->
          <div class="hidden md:block">
            <div class="flex space-x-4">
              <a  class="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Products</a>
              <a  class="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Solutions</a>
            </div>
          </div>
        </div>
        
        <!-- Center logo -->
        <div class="flex items-center">
          <a  class="text-xl font-bold text-gray-900">NimbusUI</a>
        </div>
        
        <div class="flex items-center">
          <!-- Right navigation -->
          <div class="hidden md:block">
            <div class="flex space-x-4">
              <a  class="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Pricing</a>
              <a  class="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="-mr-2 flex md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden hidden" id="mobile-menu-3">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Products</a>
        <a  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Solutions</a>
        <a  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Pricing</a>
        <a  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Contact</a>
      </div>
    </div>
    </nav>
    </div>

      </div>`
    },
    {
       Variant: `<div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-medium text-gray-900">Transparent with gradient CTA</h3>
       
      </div>
      
      <div class="bg-gray-900 rounded-lg shadow overflow-hidden mb-4">
        <div class="p-4 border-b border-gray-200 flex justify-between items-center">
          <div class="flex  gap-3">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button onclick="toggleCode('code4')" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View code
          </button>
        </div>
        
        <div class="preview-container p-6 bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]">
          <!-- Preview -->
          <nav class="bg-transparent">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <span class="text-white text-xl font-bold">NimbusUI</span>
                  </div>
                  <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                      <a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">Home</a>
                      <a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">Features</a>
                      <a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">Pricing</a>
                      <a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">About</a>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6">
                    <a  class="bg-white text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium">Sign in</a>
                    <a  class="ml-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:from-purple-600 hover:to-pink-700 hover:cursor-pointer">Get started</a>
                  </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                  <button type="button" class="bg-white bg-opacity-20 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Mobile menu -->
            <div class="md:hidden hidden" id="mobile-menu-4">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">Features</a>
                <a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                <a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">About</a>
                <div class="pt-4">
                  <a  class="block w-full bg-white text-indigo-600 text-center px-3 py-2 rounded-md text-base font-medium">Sign in</a>
                  <a  class="block w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center px-3 py-2 rounded-md text-base font-medium shadow-sm">Get started</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <!-- Code block -->
        <div id="code4" class="code-block">
          <pre class="p-4 bg-gray-800 text-gray-100 overflow-x-auto text-sm">
            <code>
    &lt;nav class="bg-transparent"&gt;
      &lt;div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
        &lt;div class="flex items-center justify-between h-16"&gt;
          &lt;div class="flex items-center"&gt;
            &lt;div class="flex-shrink-0"&gt;
              &lt;span class="text-white text-xl font-bold"&gt;Brand&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="hidden md:block"&gt;
              &lt;div class="ml-10 flex items-baseline space-x-4"&gt;
                &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium"&gt;Home&lt;/a&gt;
                &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium"&gt;Features&lt;/a&gt;
                &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium"&gt;Pricing&lt;/a&gt;
                &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium"&gt;About&lt;/a&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="hidden md:block"&gt;
            &lt;div class="ml-4 flex items-center md:ml-6"&gt;
              &lt;a  class="bg-white text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"&gt;Sign in&lt;/a&gt;
              &lt;a  class="ml-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:from-purple-600 hover:to-pink-700"&gt;Get started&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="-mr-2 flex md:hidden"&gt;
            &lt;button type="button" class="bg-white bg-opacity-20 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" aria-expanded="false"&gt;
              &lt;span class="sr-only"&gt;Open main menu&lt;/span&gt;
              &lt;svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
                &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /&gt;
              &lt;/svg&gt;
              &lt;svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
                &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /&gt;
              &lt;/svg&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Mobile menu --&gt;
      &lt;div class="md:hidden hidden" id="mobile-menu-4"&gt;
        &lt;div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"&gt;
          &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium"&gt;Home&lt;/a&gt;
          &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium"&gt;Features&lt;/a&gt;
          &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium"&gt;Pricing&lt;/a&gt;
          &lt;a  class="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium"&gt;About&lt;/a&gt;
          &lt;div class="pt-4"&gt;
            &lt;a  class="block w-full bg-white text-indigo-600 text-center px-3 py-2 rounded-md text-base font-medium"&gt;Sign in&lt;/a&gt;
            &lt;a  class="block w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center px-3 py-2 rounded-md text-base font-medium shadow-sm"&gt;Get started&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/nav&gt;

    &lt;script&gt;
      // Mobile menu toggle for variant 4
      document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.querySelector('[aria-controls="mobile-menu-4"]');
        if (menuButton) {
          const mobileMenu = document.getElementById('mobile-menu-4');
          
          menuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icons
            const hamburger = this.querySelector('.block');
            const close = this.querySelector('.hidden');
            hamburger.classList.toggle('block');
            hamburger.classList.toggle('hidden');
            close.classList.toggle('hidden');
            close.classList.toggle('block');
          });
        }
      });
    &lt;/script&gt;
            </code>
          </pre>
        </div>
      </div>`
    },
    {  
      Variant: `<div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-medium text-gray-900">Glassmorphism with animated menu</h3> 
      </div>
      
      <div class="bg-[#020617] rounded-lg shadow overflow-hidden mb-4" >
        <div class="p-4 border-b border-gray-200 flex justify-between items-center">
          <div class="flex gap-3">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button onclick="toggleCode('code6')" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View code
          </button>
        </div>
        
        <div class="preview-container p-6 bg-gradient-to-br from-purple-900 to-blue-800 relative overflow-hidden ">
          <!-- Decorative elements -->
          <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-600 opacity-20"></div>
          <div class="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600 opacity-20"></div>
          
          <!-- Preview -->
          <nav class="relative backdrop-blur-lg bg-white bg-opacity-10 rounded-xl shadow-lg border border-white border-opacity-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <div class="flex-shrink-0">
                  <span class="text-white text-2xl font-bold tracking-tight">NimbusUI</span>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                  <div class="ml-10 flex items-center space-x-8">
                    <a  class="relative group text-white px-3 py-2 text-sm font-medium transition-all duration-300">
                      Home
                      <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a  class="relative group text-white px-3 py-2 text-sm font-medium transition-all duration-300">
                      Features
                      <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a  class="relative group text-white px-3 py-2 text-sm font-medium transition-all duration-300">
                      Pricing
                      <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a  class="relative group text-white px-3 py-2 text-sm font-medium transition-all duration-300">
                      About
                      <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <button class="ml-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                  </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="-mr-2 flex md:hidden">
                  <button type="button" class="hamburger-button inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <div class="space-y-1.5">
                      <span class="block w-6 h-0.5 bg-white transition-all duration-300 hamburger-top"></span>
                      <span class="block w-6 h-0.5 bg-white transition-all duration-300 hamburger-middle"></span>
                      <span class="block w-4 h-0.5 bg-white transition-all duration-300 hamburger-bottom"></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Mobile menu -->
            <div class="mobile-menu-6 hidden md:hidden absolute top-20 left-0 right-0 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl mx-4 overflow-hidden transition-all duration-300 transform origin-top">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a  class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300">Home</a>
                <a  class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300">Features</a>
                <a  class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300">Pricing</a>
                <a  class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300">About</a>
                <div class="px-3 py-4">
                  <button class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>`
    },
    {  
      Variant: `<div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-medium text-gray-900">Floating glass with micro-interactions</h3>
    </div>
    
    <div class="bg-white rounded-lg shadow overflow-hidden mb-4">
      <div class="p-4 border-b border-gray-200 flex justify-between items-center">
        <div class="flex gap-3">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <button onclick="toggleCode('code7')" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          View code
        </button>
      </div>
      
      <div class="preview-container p-2 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden min-h-[300px]">

        <!-- Preview -->
        <nav class="relative max-w-6xl mx-auto mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all duration-500 hover:bg-white/10">
          <div class="px-6">
            <div class="flex items-center justify-between h-20">
              <!-- Logo with shine effect -->
              <div class="flex-shrink-0 ">
                <a  class="flex items-center group ">
                  <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span class="ml-3 text-xl font-bold text-black group-hover:text-gray-500 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">NimbusUI</span>
                </a>
              </div>
              
              <!-- Desktop Navigation -->
              <div class="hidden lg:flex items-center space-x-1">
                <a  class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-black hover:text-gray-500 transition-all duration-300">
                  <span class="relative">
                    Home
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a  class="nav-link px-4 py-2 rounded-lg text-sm font-medium  text-black hover:text-gray-500 transition-all duration-300">
                  <span class="relative">
                    Features
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a  class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-black hover:text-gray-500 transition-all duration-300">
                  <span class="relative">
                    Solutions
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a  class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-black hover:text-gray-500 transition-all duration-300">
                  <span class="relative">
                    Pricing
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                
                <div class="relative group ml-4">
                  <button class="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-black hover:text-gray-500 transition-all duration-300">
                    <span>More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div class="absolute right-0 mt-2 w-48 origin-top-right backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 transform z-10">
                    <div class="py-1">
                      <a  class="block px-4 py-2 text-sm text-black hover:text-gray-500 hover:bg-white/5 transition-colors duration-200">Documentation</a>
                      <a  class="block px-4 py-2 text-sm text-black hover:text-gray-500 hover:bg-white/5 transition-colors duration-200">Blog</a>
                      <a  class="block px-4 py-2 text-sm text-black hover:text-gray-500 hover:bg-white/5 transition-colors duration-200">Support</a>
                    </div>
                  </div>
                </div>
                
                <div class="ml-4 flex items-center space-x-4">
                  <a  class="px-4 py-2 text-sm font-medium  text-black hover:text-gray-500 transition-all duration-300">Sign in</a>
                  <a  class="px-5 py-2.5 rounded-lg text-sm font-medium text-black bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                    Get started
                  </a>
                </div>
              </div>
              
              <!-- Mobile menu button -->
              <div class="flex lg:hidden">
                <button type="button" class="floating-nav-button inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <div class="space-y-2">
                    <span class="block w-6 h-0.5 bg-white transition-all duration-300 floating-nav-line-1"></span>
                    <span class="block w-6 h-0.5 bg-white transition-all duration-300 floating-nav-line-2"></span>
                    <span class="block w-6 h-0.5 bg-white transition-all duration-300 floating-nav-line-3"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Mobile menu -->
          <div class="floating-mobile-menu hidden lg:hidden absolute top-20 left-4 right-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform origin-top opacity-0 scale-y-0">
            <div class="px-2 pt-2 pb-4 space-y-1">
              <a  class="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Home</a>
              <a  class="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Features</a>
              <a  class="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Solutions</a>
              <a  class="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Pricing</a>
              <div class="border-t border-white/10 pt-2">
                <a  class="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Documentation</a>
                <a  class="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Blog</a>
                <a  class="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Support</a>
              </div>
              <div class="px-3 pt-2 space-y-2">
                <a  class="block w-full px-4 py-3 rounded-lg text-center text-base font-medium text-white hover:bg-white/10 transition-colors duration-300">Sign in</a>
                <a  class="block w-full px-4 py-3 rounded-lg text-center text-base font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
    </div>`
    },
  
]

// First, find your navContainer element
const navContainer = document.querySelector('.navContainer');


  navVeriant.forEach((variant) => {
    
    const variantElement = document.createElement('div');
    
    
    variantElement.classList.add('nav-variant-item');
    
    
    variantElement.innerHTML += variant.Variant;
    
    
    navContainer.appendChild(variantElement);
  });
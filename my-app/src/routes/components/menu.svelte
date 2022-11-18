<div class="drawer">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-start">
      <!-- Page content here -->
      
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center m-5 gap-3">
          <h2 class="text-3xl text-left">Welcome to Esad's digital wiki!</h2>
          <p>A collection of all tutorials/wiki's about the different technologies used <br>feel free to add/modify/update anything</p>
        </div>
      </div>

      <label for="my-drawer-2" class="btn btn-primary drawer-button m-3 ">Open menu</label>
      
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 w-80 bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <h2 class="text-left text-3xl uppercase m-5 ">Wikis</h2>
        <li><a href="/setup">Inital Setup</a></li>
        <li><a href="/ocean">Digital Ocean </a></li>
        <li><a href="/kirby">Kirby CMS</a></li>
        <li><a href="/docker">Docker</a></li>
        <li><a href="/gcloud">Google Cloud</a></li>
        <li><a href="/directus">Directus</a></li>
        <li><a href="git">Git</a></li>
  
      </ul>
    
    </div>
</div>

  <slot></slot>
<script>
    import Nav from "../components/nav.svelte";
</script>

<Nav></Nav>


<svelte:head>
    <title>Inital Setup</title>
</svelte:head>

<div class="drawer">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-start">
      <!-- Page content here -->
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 m-5">

        <div class="card w-96 bg-base-200 shadow-xl">
            <div class="card-body">
            <h2 class="card-title">SSH Keys</h2>
            <p>Generate your ssh-keys and add them to <br> Digital Ocean,
            Bit Bucket and GitHub</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary"><a href="/setup/ssh">Take me there</a></button>
            </div>
            </div>
        </div>

        <div class="card w-96 bg-base-200 col-auto shadow-xl justify-center ">
            <div class="card-body">
            <h2 class="card-title">VS Code</h2>
            <p>If you use VSCode checkout these must have plugins, especially for remote development</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary"><a href="">VSCode</a></button>
            </div>
            </div>
        </div>
    
            <div class="card w-96 bg-base-200 shadow-xl">
                <div class="card-body">
                <h2 class="card-title">FileZilla</h2>
                <p>Pretty easy setup, just a few comments about ssh/sftp</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">FileZilla</button>
                </div>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>
            </div>
    
            <div class="card w-96 bg-base-200 shadow-xl">
                <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04">Take me there</a></button>
                </div>
                </div>
            </div>
    
    
            <div class="card w-96 bg-base-200 shadow-xl">
                <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>
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


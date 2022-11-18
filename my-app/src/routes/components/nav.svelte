<script>
    import { onMount } from 'svelte'
import { themeChange } from 'theme-change'

// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
onMount(() => {
  themeChange(false)
  // 👆 false parameter is required for svelte
})
</script>



<div class="navbar bg-base-100">
    <div class="flex-1 gap-2 ">
      <a href="/" class="btn btn-sm btn-ghost normal-case text-xl">Esad Idea</a>
      <div class="dropdown">
        <label tabindex="0" class="btn m-1">Theme</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <button data-set-theme="luxury" class="btn">dark theme</button>
            <button data-set-theme="retro" class="btn btn-secondary">light theme</button>
        </ul>
      </div>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>

<slot></slot>
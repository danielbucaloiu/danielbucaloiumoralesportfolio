<script setup>
import bgfolder from './bgfolder.vue';
import { ref, onMounted } from 'vue';

const fechaHora = ref('');

function actualizarReloj() {
  const ahora = new Date();
  
  const opcionesFecha = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  
  const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  
  fechaHora.value = `${fecha} - ${horas}:${minutos}:${segundos}`;
}

onMounted(() => {
  actualizarReloj();
  setInterval(actualizarReloj, 1000);
});
</script>

<template>
    <nav class="flex justify-center bg-blue-300 py-1">
        <p class="pr-2">{{ fechaHora }}</p>
    </nav>

    <main class="flex gap-10 p-4 pt-10">
        <section class="flex flex-col gap-8">
            <bgfolder>
                <button command="show-modal" commandfor="dialog-proyectos">
                    <img src="/public/img/folder.png" alt="" class="w-20">
                    <p class="text-center py-2">Proyectos</p>
                </button>
            </bgfolder>

            <dialog id="dialog-proyectos" closeby="all" class="bottom-20 bg-blue-300">
                <nav class="bg-blue-400 flex justify-between border-2 border-blue-500">
                    <p class="text-xl pl-1">Proyectos</p>
                    <form method="dialog" class="flex">
                        <button class="p-1 hover:bg-red-600">
                            <img src="/public/img/cancelar.png" alt="" class="w-6">
                        </button>
                    </form>
                </nav>

                <div class="px-5 py-1">
                    <p>
                        Soy Pepe Gonzalesdsfgdsgsdfgrdsrbhsrtbhsertb <br>
                        aihsfnaisfn <br>
                        ansidfbnaisdfbn
                    </p>
                </div>
            </dialog>

            <bgfolder>
                <button command="show-modal" commandfor="dialog-biografia">
                    <img src="/public/img/txt.png" alt="" class="w-20">
                    <p class="text-center py-2">Biografía</p>
                </button>
            </bgfolder>

            <dialog id="dialog-biografia" closeby="all" class="bottom-20 bg-blue-300">
                <nav class="bg-blue-400 flex justify-between border-2 border-blue-500">
                    <p class="text-xl pl-1">Biografía</p>
                    <form method="dialog" class="flex">
                        <button class="p-1 hover:bg-red-600">
                            <img src="/public/img/cancelar.png" alt="" class="w-6">
                        </button>
                    </form>
                </nav>

                <div class="px-5 py-1">
                    <p>
                        Biografíaaaaaaaaaaaaa <br>
                        Biografía <br>
                        Biografía
                    </p>
                </div>
            </dialog>

            <bgfolder>
                <button command="show-modal" commandfor="dialog-mail">
                    <img src="/public/img/mail.png" alt="" class="w-20">
                    <p class="text-center">Contacto</p>
                </button>
            </bgfolder>

            <dialog id="dialog-mail" closeby="all" class="bottom-20 bg-blue-300">
                <nav class="bg-blue-400 flex justify-between border-2 border-blue-500">
                    <p class="text-xl pl-1">Contacto</p>
                    <form method="dialog" class="flex">
                        <button class="p-1 hover:bg-red-600">
                            <img src="/public/img/cancelar.png" alt="" class="w-6">
                        </button>
                    </form>
                </nav>

                <div class="px-5 py-1">
                    <p>
                        Contactooooooooooooooooo <br>
                        Contacto <br>
                        Contacto
                    </p>
                </div>
            </dialog>

        </section>

        <section class="flex flex-col gap-8">
            <bgfolder>
                <button command="show-modal" commandfor="dialog-gitub">
                    <img src="/public/img/github.png" alt="" class="w-20">
                    <p class="text-center py-2">Gitub</p>
                </button>
            </bgfolder>

            <dialog id="dialog-gitub" closeby="all" class="bottom-20 bg-blue-300">
                <nav class="bg-blue-400 flex justify-between border-2 border-blue-500">
                    <p class="text-xl pl-1">Gitub</p>
                    <form method="dialog" class="flex">
                        <button class="p-1 hover:bg-red-600">
                            <img src="/public/img/cancelar.png" alt="" class="w-6">
                        </button>
                    </form>
                </nav>

                <div class="px-5 py-1">
                    <p>
                        Gitubbbbbbbbbbbbbbbbbbbb <br>
                        Gitub <br>
                        Gitub
                    </p>
                </div>
            </dialog>

            <bgfolder>
                <button command="show-modal" commandfor="dialog-languages">
                    <img src="/public/img/languages.png" alt="" class="w-20">
                    <p class="text-center py-2">Languages</p>
                </button>
            </bgfolder>

            <dialog id="dialog-languages" closeby="all" class="bottom-20 bg-blue-300">
                <nav class="bg-blue-400 flex justify-between border-2 border-blue-500">
                    <p class="text-xl pl-1">Languages</p>
                    <form method="dialog" class="flex">
                        <button class="p-1 hover:bg-red-600">
                            <img src="/public/img/cancelar.png" alt="" class="w-6">
                        </button>
                    </form>
                </nav>

                <div class="px-5 py-1">
                    <p>
                        Languagessssssssssssssssssssssssss <br>
                        Languages <br>
                        Languages
                    </p>
                </div>
            </dialog>

        </section>
    </main>

    <footer class="fixed bottom-0 left-0 right-0 bg-blue-400 py-2">
        <div class="flex justify-center">
            <img src="/public/img/windows.png" alt="" class="w-16">
        </div>
    </footer>
</template>
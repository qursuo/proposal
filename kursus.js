const deskripsi = document.querySelector("#deskripsi");
fetch("kursus.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      deskripsi.insertAdjacentHTML(
        "beforeend",
        `<p style="text-align: justify;">${post.deskripsi}
      </p>`
      );
    });
  });

const latar= document.querySelector("#latar");
fetch("kursus.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      latar.insertAdjacentHTML(
        "beforeend",
        `<p style="text-align: justify;">${post.latar}
      </p>`
      );
    });
  });

const tujuan = document.querySelector("#tujuan");
fetch("kursus.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      tujuan.insertAdjacentHTML(
        "beforeend",
        `<p style="text-align: justify;">${post.tujuan}</p>
      </p>`
      );
    });
  });

const manfaat = document.querySelector("#manfaat");
fetch("kursus.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      manfaat.insertAdjacentHTML(
        "beforeend",
        `<p style="text-align: justify;">${post.manfaat}</p>
      </p>`
      );
    });
  });

const landasanteori = document.querySelector("#landasan-teori");
fetch("kursus.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      landasanteori.insertAdjacentHTML(
        "beforeend",
        `<p style="text-align: justify;">${post.landasan}</p>
      </p>`
      );
    });
  });

const kesimpulan = document.querySelector("#kesimpulan");
fetch("kursus.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      kesimpulan.insertAdjacentHTML(
        "beforeend",
        `<p style="text-align: justify;">${post.kesimpulan}</p>
      </p>`
      );
    });
  });

const anggotatim = document.querySelector("#anggota-tim");
fetch("kursus.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      anggotatim.insertAdjacentHTML(
        "beforeend",
        `<p style="text-align: justify;">${post.anggota}</p>
      </p>`
      );
    });
  });

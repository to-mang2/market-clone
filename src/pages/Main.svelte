<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import { getDatabase, ref, onValue } from "firebase/database";

  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  $: items = [];

  const calTime = (timeStamp) => {
    const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
    const time = new Date(curTime - timeStamp);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    if (hour > 0) return `${hour}시간 전`;
    else if (minute > 0) return `${minute}분 전`;
    else if (second >= 0) return `${second}초 전`;
    else "방금 전";
  };

  const db = getDatabase();
  const itemsRef = ref(db, "items/");

  onMount(() => {
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
    });
  });
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" />
      <img src="assets/wifi.svg" />
      <img src="assets/battery.svg" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>역삼 1동</div>
      <div class="menu-bar__location-icon">
        <img src="assets/arrow.svg" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="assets/search.svg" />
      <img src="assets/menu.svg" />
      <img src="assets/alert.svg" />
    </div>
  </div>
</header>

<main>
  {#each items as item}
    <div class="item-list">
      <div class="item-list__img">
        <img alt={item.title} src={item.imgUrl} />
      </div>
      <div class="item-list__info">
        <div class="item=list__info-title">{item.title}</div>
        <div class="item=list__info-meta">
          {item.place}
          {calTime(item.insertAt)}
        </div>
        <div class="item=list__info-price">{item.price}</div>
        <div>{item.description}</div>
      </div>
    </div>
  {/each}
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<Footer location="home" />

<div class="media-info-msg">화면 사이즈를 줄여주세요.</div>

<style>
</style>

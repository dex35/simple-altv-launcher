import './utils/window';
import './utils/contextmenu';
import { fetchServerList } from './api';
import { connect } from './utils/connect.ts';

type ServerType = {
  name: string;
  address: string;
}

function renderList(items: ServerType[]) {
  const $tmp = document.getElementById('server-template') as HTMLTemplateElement;
  const $serverList = document.querySelector('.server-list');
  if ($serverList === null) {
    return;
  }

  items.forEach((i: ServerType) => {
    const $listItem = $tmp.content.cloneNode(true) as DocumentFragment;

    ($listItem.querySelector('.server-name') as HTMLSpanElement).innerText = i.name;

    const $btn = $listItem.querySelector('.connect-btn') as HTMLElement;
    $btn.addEventListener('click', () => connect(i.address));

    $serverList.appendChild($listItem);
  });
}

async function init() {
  try {
    const result = await fetchServerList();
    renderList(result);
  } catch (e) {

  }
}

window.addEventListener('DOMContentLoaded', () => {
  init();
});

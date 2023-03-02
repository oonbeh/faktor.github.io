// Array URL yang diberikan
const urls = [
  'https://shope.ee/3poqM1Vuqn?share_channel_code=7',
'https://shope.ee/6UpbWvhtsQ?share_channel_code=7',
'https://shope.ee/3fVQ9jjU15?share_channel_code=7',
'https://t.co/Q3NjAUDptI',
'https://shope.ee/2AgcMyT7su?share_channel_code=7',
'https://shope.ee/8eu66twBxi?share_channel_code=7',
'https://shope.ee/8eu66uva89?share_channel_code=7',
'https://shope.ee/5Ux4L5q6gi?share_channel_code=7',
'https://shope.ee/A9iV5KAy8H?share_channel_code=7',
'https://shope.ee/5Ux4L6Tlzc?share_channel_code=7',
'https://shope.ee/407rjzZ40O?share_channel_code=7',
'https://t.co/IX3GTsW3gP',
'https://shope.ee/5ztKw0jntJ?share_channel_code=7',
'https://shope.ee/3poqM2nFSg?share_channel_code=7',
'https://shope.ee/5ztKw0o8PZ?share_channel_code=7',
'https://shope.ee/500OvpZj1S?share_channel_code=7',
'https://t.co/Q3kfdmrYpK',
'https://shope.ee/9emI2nxBQI?share_channel_code=7',
'https://shope.ee/8Uafubrsww?share_channel_code=7',
'https://shope.ee/3VBzxQoRsG?share_channel_code=7',
'https://shope.ee/4Kki8bXnKU?share_channel_code=7',
'https://shope.ee/1L7VNRf1sX?share_channel_code=7',
'https://shope.ee/1VQvZkN4SW?share_channel_code=7',
'https://shope.ee/7Ui8ilmcMa?share_channel_code=7',
'https://shope.ee/8pDWJE3ssi?share_channel_code=7',
'https://shope.ee/biydx5ge?share_channel_code=7',
'https://t.co/i6p4L1u7fR',
'https://shope.ee/A9iYdizgBt?share_channel_code=7',
'https://shope.ee/5AKDwUZNBu?share_channel_code=7',
'https://shope.ee/frPlrq9YG?share_channel_code=7',
'https://shope.ee/9USoI696hd?share_channel_code=7',
'https://shope.ee/9emEUP3w3i?share_channel_code=7',
'https://shope.ee/AvXzIf8j2?share_channel_code=7',
'https://shope.ee/6pSRvYbxtg?share_channel_code=7',
'https://t.co/kbxNMx668a',
'https://shope.ee/7KOiWSNCJm?share_channel_code=7',
'https://shope.ee/9K9mu8fuh3?share_channel_code=7',
'https://shope.ee/LEyBaaZue?share_channel_code=7',
'https://shope.ee/500SUEJpVm?share_channel_code=7',
'https://shope.ee/4Kklh0DV2M?share_channel_code=7',
'https://shope.ee/6UpbWvHZRZ?share_channel_code=7',
'https://shope.ee/A9iYdivD97?share_channel_code=7',
'https://shope.ee/4V4BtJCrhP?share_channel_code=7',
'https://t.co/nV4q1voby1',
'https://t.co/SSlUYRKg4Z',
'https://shope.ee/froaCUuSE?share_channel_code=7',
'https://shope.ee/7pKz7NLIIr?share_channel_code=7',
'https://shope.ee/4phNXsaZbU?share_channel_code=7',
'https://shope.ee/3VBzxQxNxp?share_channel_code=7',
'https://shope.ee/6f91jEYOi9?share_channel_code=7',
'https://shope.ee/5Ux4L5lddw?share_channel_code=7',
'https://shope.ee/7UhjuQCSVF?share_channel_code=7',
'https://shope.ee/5Ux4L6pZ7R?share_channel_code=7',
'https://shope.ee/2AgcMyKSqO?share_channel_code=7'
];

// Fungsi untuk memuat URL acak
function loadRandomUrl() {
  // Mendapatkan indeks acak dari array URL
  const randomIndex = Math.floor(Math.random() * urls.length);
  
  // Mengambil URL yang sesuai dengan indeks acak
  const randomUrl = urls[randomIndex];
  
  // Memuat URL acak di jendela baru
  window.open(randomUrl);
}

// Memanggil fungsi loadRandomUrl() saat tombol di klik
document.querySelector('#load-random-url').addEventListener('click', loadRandomUrl);

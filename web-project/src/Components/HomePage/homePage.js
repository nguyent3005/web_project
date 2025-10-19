import style from "./homePage.module.scss";

function HomePage() {
  return (
    <div className={style.homeContainer}>
      {/* Sidebar */}
      <aside className={style.sidebar}>
        <h3>DANH MỤC SẢN PHẨM</h3>
        <ul>
          <li>PC Gaming - Máy tính chơi game</li>
          <li>PC Workstation</li>
          <li>Tự Build Cấu Hình PC</li>
          <li>PC Văn Phòng</li>
          <li>PC AMD Gaming</li>
          <li>PC Core Ultra</li>
          <li>PC Gaming Đẹp - Cao Cấp</li>
          <li>PC Giả Lập - Ảo Hóa</li>
          <li>PC Mini</li>
          <li>PC Refurbished</li>
          <li className={style.more}>+ Xem thêm</li>
        </ul>
      </aside>

      {/* Main Banner Section */}
      <main className={style.mainBanner}>
        <div className={style.bannerLarge}>
          <img src="/images/banner1.png" alt="Build PC Có Quà" />
        </div>

        <div className={style.bannerRight}>
          <img src="/images/banner2.png" alt="PC Gaming Hiệu Suất Cao" />
          <img src="/images/banner3.png" alt="PC AMD Gaming" />
          <img src="/images/banner4.png" alt="PC Workstation" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;

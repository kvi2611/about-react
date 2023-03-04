1. Phân biệt props, state là gì. có thay đổi giá trị của props được không nếu được thì làm như nào.

   # props dùng để truyền dữ liệu từ component cha sang component con, và th con chỉ read only, state dùng để quản lý dữ liệu

   VD: function App(props) {
   return (
      <div>
         <Clothes name="Quần jean" type="Skinny" color ="Đen" size = "L">Clothes 1</Clothes>
         <Clothes name="Váy" type="váy công chúa" color ="Trắng" size = "M">Clothes 2</Clothes>
      </div>
      );
      }

   const Clothes = (props) => {
   console.log(props) //Giá trị của props
   return (
   <div>
      <h1>{props.children}</h1>
      <ul>
         <li><b>Tên:</b> {props.name}</li>
         <li><b>Loại:</b> {props.type}</li>
         <li><b>Màu:</b> {props.color}</li>
         <li><b>Kích cỡ:</b> {props.size}</li>
      </ul>
   <hr></hr>
   </div>
   );
   };

2. SetState là hàm đồng bộ hay bất đồng bộ

   # React cố tình chờ khi tất cả Component gọi tới hàm setState() trước khi bắt đầu re-render, điều này làm tăng hiệu suất, tránh việc re-render không cần thiết.

3. DOM ảo là gì, quá trình render, re-render được thực hiện như thế nào.

   # DOM ẢO sẽ tạo ra 1 bộ nhớ đệm, và chúng ta sẽ tính toán trên đó, và kết quả tính toán sẽ được react cập nhật trên dom thật,

   # Khi một component được khởi tạo, mount vào DOM và trong quá trình nó được update các state hay props , từ lần render đầu tiên component sẽ được re-render liên tục cho tới khi nó được unmount khỏi DOM .

4. Em code chủ yếu là function component hay class component. Điểm khác nhau giữa 2 thằng

   # Functional đơn giản chỉ là một hàm trong javascript còn class component là các lớp đơn giản yêu cầu bạn mở rộng từ React để cấu tạo nên components.

5. Em hãy trình bày về Lifecycle.

   # 1 component gồm 4 giai đoạn : initialization (khởi tạo), mounting (gán vào - chuyển dom ảo thành dom thật và hiển thị), updating (cập nhật), unmounting (tháo ra)

6. Giải thích ý nghĩa của từng Dependency trong useEffect.

   # 1. useEffect ((callback){})

   **USEEFFECT LUÔN LUÔN ĐƯỢC THỰC HIỆN SAU MỖI LẦN RENDER**

   # 2. useEffect ((callback)=>{}, [])

   **USEEFFECT SẼ CHẠY ĐÚNG 1 LẦN SAU LẦN RENDER ĐẦU TIÊN VÀ CALL BACK CHẠY ĐÚNG 1 LẦN KHI COMPONENT UNMOUNTED**

   # 3. useEffect ((callback)=>{}, [deps])

   **USE EFFECT SẼ DỰA VÀO GIÁ TRỊ DEPS TRONG LẦN RE-RENDER KẾ TIẾP, nó sẽ kiểm trả giá trị của deps mới so với deps trước đó, nếu khác nhau thì sẽ được thực hiện**

7. Ngoài useEffect ra em còn biết về các hooks nào khác không, em đã custom 1 hooks nào chưa.

# USE CONTEXT : TRUYỀN DỮ LIỆU TỪ COMPO CHA XUỐNG BẤT KÌ COMPO CON NÀO MÀ KHÔNG CẦN DÙNG PROPS

8. HOC là gì.

# HIGH ORDER COMPONENT : là 1 kỹ thuật nâng cao của React để sử dụng lại logic của component

9. Promise, callback, async/await là gì.

# promise được sinh ra để xử lý bất đồng bộ, callback là hàm được truyền qua hàm khác dưới dạng đối số, async/await thực chất là promise nhưng cách viết của nó sẽ giúp code trong đồng bộ

10. Quy tắc đặt tên BEM.

# Block-Element-Modifier = bem :

         - block : khối
         - element : thành phần trong khối
         - modifier : bổ sung ý nghĩa cho block hoặc element

# cách viết: .block\_\_element--modifier

# VÍ DỤ :

         <div class="card">
            <h3 class="heading">heading</h3>
            <div class="button">submit</div>
         </div>

         =>>>>> <div class="card card--success">
            <h3 class="card__heading">heading</h3>
            <div class="card__btn card__button--large">submit</div>
         </div>

11. Theo em ReactJS là CSR hay SSR.

    # SPA - SINGLE PAGE APLLICATION : KHÔNG YÊU CẦU TẢI LẠI TRANG TRONG QUÁ TRÌNH SỬ DỤNG, DỄ BÓC TÁCH FE VÀ BE, PHÁT TRIỂN MOBILE APP DỄ DÀNG, SPA PHỤ THUỘC HOÀN TOÀN VÀO JS

    # react là csr và ssr

12. UseMemo() là gì ?

# USE MEMO : TRÁNH THỰC HIỆN LẠI 1 LOGIC NÀO ĐÓ KHÔNG CẦN THIẾT

# cú pháp: useMemo((),[deps])

13. useRef() là gì ?

# USE REF: là 1 hàm nhận initial value và nó chỉ sử dụng giá trị khởi tạo trong lần đầu khi compo đc mount, khi re-render thì ko dùng lại initial value

14. useReducer() là gì ?

# useReducer: useReducer hook được sử dụng trong trường hợp component có state phức tạp và có nhiều action type làm thay đổi state đó.

- luồng hoạt động :

  - Init state
  - Actions:
  - Reducer : là 1 hàm nhận đầu vào là state và action, dựa vào action mà trả ra state mới, và state mới luôn cùng dữ liệu với initState
  - Dispatch : _dispatch là một HÀNH ĐỘNG nhằm giúp ACTION ĐƯỢC KÍCH HOẠT, từ đó state đc thay đổi và re-render ra_

15. life cycle trong useEffect() ?

- componentDidMount() :
- componentDidUpdate()
- componentWillUnmount() : viết clean up function

16. các css selector

- basic css selector
- descendent css selector : .class1 .class2, .class1 > .class2
- multiple css selector: .class1, .class2, .class3
- comibination css selector : .class1.class2
- sibling css selector : "+", "~", ">"
- pesudo css selecor: nth-child, first-child, ...
- pesudo selector: ":hover", ":active", ":focus"
- attribute css selector: [], ^, $, \*

17. CSS UNITS

# đơn vị tuyệt đối

      - px:

# đơn vị tương đối

      - em : tỉ lệ của "em" sẽ tương ứng với px của font-size thằng cha trực tiếp, nếu width thì sẽ tỉ lệ với font-size của chính nó
      - rem (root em) : tương ứng với root element(thông thường là thẻ html)
      - vw : tỉ lệ theo chiều ngang của browser / thiết bị
      - vh : tỉ lệ theo chiều dọc của browser / thiết bị
      - % : tương ứng với thằng cha trực tiếp của nó

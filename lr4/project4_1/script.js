let text = "https://f.sdf\n" +
    "https://lms.mospolytech.ru/course/view.php?id=4514\n" +
    "https://learn.javascript.ru/regexp-multiline-mode\n" +
    "kol2.2-4@kolaqs.new.ru\n" +
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
    "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to " +
    "make a type specimen book. It has survived not only five centuries, but also the leap into electronic " +
    "typesetting, remaining essential@ly.ff.rrrrr unchanged. It was popularised in the 1960s with the release of " +
    "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like " +
    "Aldus PageMaker including versions of Lorem Ipsum.\n" +
    "\n" +
    "Why do we use it?\n" +
    "It is a long established fact thathttps://lms.mospolytech.ru/mod/assign/view.php?id=113908 a reader will be " +
    "distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is " +
    "that it has a more-or-less normal distri@bution.dd of letters, as opposed to using 'Content here, content " +
    "here', making it look like https://lms.mospolytech.ru/mod/assign/view.php?id=113908 readable English. Many " +
    "desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search " +
    "for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the " +
    "years, sometimes by accident, sometimes on purpose (injected humour and the like).\n" +
    "\n" +
    "https://lms.mospolytech.ru/mod/assign/view.php?id=113908\n" +
    "Where does it come from?\n" +
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin " +
    "literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney " +
    "College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, " +
    "and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum\n" +
    "https://regex101.com\n" +
    "kolaqsq@gmail.com";

let regex_url = new RegExp(/\b(https?:\/{2})(([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9]\.)+[a-zA-Z0-9]+)\/?(([a-zA-Z0-9\-\.\_\~\:\?\#\[\]\@\!\$\&\+\=]+\/)*[a-zA-Z0-9\-\.\_\~\:\?\#\[\]\@\!\$\&\+\=]*)?/, 'gm');

let regex_mail = new RegExp(/\b[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9]|[a-zA-Z0-9])?@([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9])?\.)+[a-zA-Z0-9]+/, 'gm');

let url = text.match(regex_url);
let mail = text.match(regex_mail);
console.log(text, url, mail);

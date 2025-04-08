document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("topupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const uid = document.getElementById("uid").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("method").value;

    if (uid === "" || amount === "" || method === "") {
      alert("সব ফিল্ড পূরণ করুন!");
      return;
    }

    // এখানে সাধারণভাবে দেখানো হবে সাবমিশনের রেজাল্ট
    alert(
      `আপনার অর্ডার সাবমিট হয়েছে!\n\nUID: ${uid}\nDiamond: ${amount}\nPayment Method: ${method}\n\nশীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে।`
    );

    // ফর্ম রিসেট
    form.reset();
  });
});

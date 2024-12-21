// JavaScript to handle search functionality
const banks = [
        { name: "State Bank of Pakistan (Central Bank)", link: "https://www.sbp.org.pk" },
        { name: "Habib Bank Limited (HBL)", link: "https://www.hbl.com" },
        { name: "National Bank of Pakistan (NBP)", link: "https://www.nbp.com.pk" },
        { name: "United Bank Limited (UBL)", link: "https://www.ubldigital.com" },
        { name: "Allied Bank Limited (ABL)", link: "https://www.abl.com" },
        { name: "Askari Bank Limited", link: "https://www.askaribank.com.pk" },
        { name: "Bank Alfalah Limited (BAFL)", link: "https://www.bankalfalah.com" },
        { name: "Bank Al-Habib Limited (BAHL)", link: "https://www.bankalhabib.com" },
        { name: "BankIslami Pakistan Limited", link: "https://www.bankislami.com.pk" },
        { name: "MCB Bank Limited", link: "https://www.mcb.com.pk" },
        { name: "Meezan Bank Limited", link: "https://www.meezanbank.com" },
        { name: "Soneri Bank Limited", link: "https://www.soneribank.com" },
        { name: "Standard Chartered Bank (Pakistan) Limited", link: "https://www.sc.com/pk" },
        { name: "Sindh Bank", link: "https://www.sindhbank.com.pk" },
        { name: "The Bank of Khyber", link: "https://www.bok.com.pk" },
        { name: "Zarai Taraqiati Bank Limited", link: "https://www.ztbl.com.pk" },
        { name: "Meezan Bank Limited", link: "https://www.meezanbank.com" },
        { name: "Soneri Mustaqeem Islamic Bank", link: "https://www.soneribank.com" },
        { name: "Dubai Islamic Bank", link: "https://www.dibpak.com" },
        { name: "Al Baraka Bank", link: "https://www.albaraka.com.pk" },
        { name: "Bank Alfalah Islamic Bank", link: "https://www.bankalfalah.com/islamic-banking" },
        { name: "Askari Bank Ltd", link: "https://www.askaribank.com.pk" },
        { name: "MCB Islamic Banking", link: "https://www.mcb.com.pk" },
        { name: "UBL Islamic Banking", link: "https://www.ubldigital.com" },
        { name: "HBL Islamic Banking", link: "https://www.hbl.com" },
        { name: "National Bank of Pakistan Islamic Banking", link: "https://www.nbp.com.pk" },
        { name: "Bank Al Habib Islamic Banking", link: "https://www.bankalhabib.com" },
        { name: "Bank of Punjab Islamic Banking", link: "https://www.bop.com.pk" },
        { name: "Faysal Bank (Islamic)", link: "https://www.faysalbank.com" },
        { name: "HabibMetro (Sirat Islamic Banking)", link: "https://www.habibmetro.com" },
        { name: "Silk Bank (Emaan Islamic Banking)", link: "https://www.silkbank.com.pk" },
        { name: "Bank Of Khyber (Islamic Window)", link: "https://www.bok.com.pk" },
        { name: "Deutsche Bank AG (Deutsche Bank Pakistan)", link: "https://www.db.com/pakistan" },
        { name: "Citi Bank N.A (CitiBank N.A Pakistan)", link: "https://www.citibank.com" },
        { name: "Industrial and Commercial Bank of China Limited (ICBC Pakistan)", link: "https://www.icbc.com.pk" },
        { name: "Bank of China (Bank of China Pakistan Branch)", link: "https://www.bankofchina.com" },
        { name: "The Hong Kong and Shanghai Bank (HSBC Bank Pakistan)", link: "https://www.hsbc.com" },
        { name: "The Bank of Tokyo-Mitsubishi UFJ (MUFG Bank Pakistan)", link: "https://www.mufg.jp" },
        { name: "Advans Micro Finance Bank Limited", link: "https://www.advanspakistan.com" },
        { name: "APNA Micro Finance Bank Limited", link: "https://www.apnabank.com" },
        { name: "FINCA Micro Finance Bank Limited", link: "https://www.finca.pk" },
        { name: "Khushhali Bank Limited", link: "https://www.khushhalibank.com.pk" },
        { name: "Mobilink Microfinance Bank Limited", link: "https://www.mobilinkbank.com" },
        { name: "NRSP Micro Finance Bank Limited", link: "https://www.nrspbank.com" },
        { name: "Pak Oman Micro Finance Bank Limited", link: "https://www.pomicrobank.com" },
        { name: "Sindh Microfinance Bank Limited", link: "https://www.sindhmfb.com" },
        { name: "Tameer Micro Finance Bank Limited", link: "https://www.easypaisa.com.pk" },
        { name: "The First Micro Finance Bank Limited", link: "https://www.fmfb.com.pk" },
        { name: "U Micro Finance Bank Limited", link: "https://www.ubank.com.pk" },
        { name: "House Building Finance Corporation", link: "https://www.hbfc.com.pk" },
        { name: "Bankers Equity Limited", link: "https://www.bel.com.pk" },
        { name: "PAIR Investment Company Limited", link: "https://www.pairic.com" },
        { name: "Pak Brunei Investment Company Limited", link: "https://www.pakbrunei.com.pk" },
        { name: "Pak Oman Investment Company Limited", link: "https://www.pakoman.com" },
        { name: "Pak-China Investment Company Limited", link: "https://www.pakchinainvest.com" },
        { name: "Pakistan Kuwait Investment Company Limited", link: "https://www.pkic.com" },
        { name: "Punjab Small Industries Corporation", link: "https://www.psic.gov.pk" },
        { name: "Saudi Pak Industrial & Agricultural Investment Company Limited", link: "https://www.saudipak.com" },
        { name: "Easypaisa", link: "https://www.easypaisa.com.pk" },
        { name: "JazzCash", link: "https://www.jazzcash.com.pk" },
        { name: "NayaPay", link: "https://www.nayapay.com" },
        { name: "Sadapay", link: "https://www.sadapay.pk" },
        { name: "Konnect by HBL", link: "https://www.hbl.com/konnect" },
    
];

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    const results = banks.filter(bank => bank.name.toLowerCase().includes(query));
    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('a');
            resultItem.href = result.url;
            resultItem.target = "_blank";
            resultItem.textContent = result.name;
            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.textContent = 'No results found';
    }
});


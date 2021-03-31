$(document).ready(function () {

    $(document).ready(function (e) {
        var result = Paging(1, 5, 50, "aspirasi", "disable-aspirasi");
        $("#pagination-aspirasi").html(result)
    });

    $("#pagination-aspirasi").on("click", "a", function () {
        var result = Paging($(this).attr("pn"), 5, 50, "aspirasi", "disable-aspirasi");
        $("#pagination-aspirasi").html(result)
    });

    function Paging(PageNumber, PageSize, TotalRecords, ClassName, DisableClassName) {
        var ReturnValue = "";

        var TotalPages = Math.ceil(TotalRecords / PageSize);
        if (+PageNumber > 1) {
            if (+PageNumber == 2)
                ReturnValue = ReturnValue + "<a pn='" + (+PageNumber - 1) + "' class='" + ClassName + "'><</a>";
            else {
                ReturnValue = ReturnValue + "<a pn='";
                ReturnValue = ReturnValue + (+PageNumber - 1) + "' class='" + ClassName + "'><</a>";
            }
        }
        else
            ReturnValue = ReturnValue + "<span class='" + DisableClassName + "'><</span>";
        if ((+PageNumber - 3) > 1)
            ReturnValue = ReturnValue + "<a pn='1' class='" + ClassName + "'>1</a>.....";
        for (var i = +PageNumber - 3; i <= +PageNumber; i++)
            if (i >= 1) {
                if (+PageNumber != i) {
                    ReturnValue = ReturnValue + "<a pn='";
                    ReturnValue = ReturnValue + i + "' class='" + ClassName + "'>" + i + "</a>";
                }
                else {
                    ReturnValue = ReturnValue + "<span style='font-weight:bold;'>" + i + "</span>";
                }
            }
        for (var i = +PageNumber + 1; i <= +PageNumber + 3; i++)
            if (i <= TotalPages) {
                if (+PageNumber != i) {
                    ReturnValue = ReturnValue + "<a pn='";
                    ReturnValue = ReturnValue + i + "' class='" + ClassName + "'>" + i + "</a>";
                }
                else {
                    ReturnValue = ReturnValue + "<span style='font-weight:bold;'>" + i + "</span>";
                }
            }
        if ((+PageNumber + 3) < TotalPages) {
            ReturnValue = ReturnValue + ".....<a pn='";
            ReturnValue = ReturnValue + TotalPages + "' class='" + ClassName + "'>" + TotalPages + "</a>";
        }
        if (+PageNumber < TotalPages) {
            ReturnValue = ReturnValue + "<a pn='";
            ReturnValue = ReturnValue + (+PageNumber + 1) + "' class='" + ClassName + "'>></a>";
        }
        else
            ReturnValue = ReturnValue + "<span class='" + DisableClassName + "'>></span>";

        return (ReturnValue);
    }

});

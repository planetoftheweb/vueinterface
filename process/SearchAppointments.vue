<template>
  <div class="row search-appointments">
    <div class="col-sm-offset-3 col-sm-6">

      <div class="input-group">

        <input id="SearchApts" placeholder="Search" type="text" class="form-control" aria-label="Search Appointments" />

        <div class="input-group-btn">
          <button type="button" class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span class="caret"></span></button>

            <ul class="dropdown-menu dropdown-menu-right">

              <li><a href="#" id="petName">Pet Name<span class="glyphicon glyphicon-ok"></span></a></li>

              <li><a href="#" id="aptDate">Date<span class="glyphicon glyphicon-ok"></span></a></li>

              <li><a href="#" id="ownerName">Owner<span class="glyphicon glyphicon-ok"></span></a></li>

              <li role="separator" class="divider"></li>

              <li><a href="#" id="asc">Asc<span class="glyphicon glyphicon-ok"></span></a></li>

              <li><a href="#" id="desc">Desc
                <span class="glyphicon glyphicon-ok"></span></a></li>
            </ul>
        </div><!-- input-group-btn --> 
      </div><!-- input-group --> 
    </div><!-- col-sm-offset-3 --> 
  </div><!-- search-appointments -->
</template>

<script>
export default {

  name: 'SearchAppointments',

} // export
</script>
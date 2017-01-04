<?php

/* @var $this yii\web\View */

$this->title = 'c';
use yii\helpers\Html;
use yii\web\View;
use frontend\models\UserDet;
use yii\widgets\ActiveForm;
use kartik\file\FileInput;
use dosamigos\fileupload\FileUploadUI;
use yii\widgets\ListView;
use yii\grid\GridView;
use yii\helpers\Url;
use frontend\models\Cities;
use yii\helpers\ArrayHelper;
?>
<div class="site-index">
	<div class="body-content">
		<div class="row" style="min-height:500px">
            <div class="col-lg-4" id="sidebar">
				<div>
					<?php 	
						$this->registerJs("var options = 17;", View::POS_HEAD, 'my-options');
						$this->registerJs(" is_cab11 = 1 "."".";", View::POS_HEAD, 'my-options');
						$this->registerJs("tasks_customer() "."".";", View::POS_END, 'my-options');
						$this->registerJs("var user_id = ".\Yii::$app->user->identity->id.";", View::POS_HEAD, 'my-options');
						$this->registerJs(" cabinet_my_tasks() "."".";", View::POS_END, 'my-options');
						
					?>
					<?= $this->registerJsFile('http://api-maps.yandex.ru/2.1/?lang=ru_RU'); ?>
					<?= $this->registerJsFile('@web/110.js'); ?>
					<?=
								
					$this->registerCssFile("http://151.248.115.164/advanced/css/cabinet1.css", [
					//'depends' => [BootstrapAsset::className()],
					'media' => 'print',
					], 'css-print-theme');
					?>

					
					<div class="profile-avatar-wrap" >
						<?php
							if($user_det->avatar == ''){
								
							}
							else{
								echo '<img src="http://151.248.115.164/advanced/ima/'.$user_det->user_id.'.jpg" id="profile-avatar" alt="Image for Profile" class="img-rounded cabinet_avatar">';
								echo "<h3 >".$user_det->surname." ".$user_det->name. "</h3>";
							}
						?>
					</div>
					<ul style="list-style-type:none">
						<li>
							<p>
								<?php echo \Yii::t('frontend', 'status');
								if($user_det->status == 1){
									echo \Yii::t('frontend', ' busy');
								}
								if($user_det->status == 2){
									echo \Yii::t('frontend', ' free');
								} ?> </p>
						</li>
						<li>
							<p><?php echo \Yii::t('frontend', 'city');?>
							<?php
								$rows = (new \yii\db\Query())
								->select(['cities.name'])
								->from('cities')
								->where('cities.id=:executor_id')
								->addParams([':executor_id' => $user_det->city])
								->one();
								echo $rows["name"];
							?>
							</p>
						</li>
						<li><p><?php echo "last login:".$user_det->last_login;?></p></li>
						
					</ul>
				</div>
				
            </div>
            <div class="col-lg-8" style="min-height:500px">
				<ul id="main_menu">
					<li id="courier_tasks_button"><h3>courier_tasks</h3></li>
					<li id="profile_button"><h3>profile</h3></li>
					<li id="customer_tasks"></li>
				</ul>
				<div>
					
					<!-- Tab panes -->
					<div class="menu_wrapper">
						<div role="" id="home">
							<ul id="cabinet_my_tasks" style="" >
							</ul>
							<div id="map" style="display:none;width:90%"></div>
							<div id="addr_wrapper" style="display:none"><ul id="addr_list"></ul></div>
							
							<div id="controls_wrap" style="display:none">
								<button class="view_s_r">show</button>
								<select id="dates">
									<option>today</option>
									<option>yesterday</option>
								</select>
								<input type="date" id="dates1">
							</div>
						</div>
						<div role="tabpanel" id="profile" style="display:none;width:400px;margin:0 auto">
							<div class="user-det-form">
								<?php $form = ActiveForm::begin([
										'action' => Url::toRoute(['user-det/update', 'user_id' => $user_det->user_id, 'id' => $user_det->id])
							
								]); ?>
								
								<?= $form->field($user_det, 'surname')->textInput(['maxlength' => true])->label(\Yii::t('frontend', 'фамилия')) ?>
								<?= $form->field($user_det, 'name')->textInput(['maxlength' => true])->label(\Yii::t('frontend', 'имя')) ?>
								<?= $form->field($user_det, 'country')->textInput(['maxlength' => true])->label(\Yii::t('frontend', 'country')) ?>
								<?= $form->field($user_det, 'mobile')->textInput(['maxlength' => true])->label(\Yii::t('frontend', 'phone')) ?>
									
								<?php 
									echo $form->field($user_det, 'city')
									->dropDownList(
									$cabinet_cities           
									)->label(\Yii::t('frontend', 'город'));
									
									echo $form->field($user_det, 'status')
									->dropDownList(
									$status11       
							
									);
									
								?>
									
								<div class="form-group">
									<?= Html::submitButton($user_det->isNewRecord ? 'Create' : 'Update', ['class' => $user_det->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
								</div>

								<?php ActiveForm::end(); ?>
								<?php
									echo '<label class="control-label">upload avatar</label>';
									echo '<span class="btn btn-default btn-file">upload
									<input type="file" id="uploader">
									</span>
									<button id="avatar_save">+</button>';
								?>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane" id="messages">...<div id="map1"></div></div>
						<div role="tabpanel" class="tab-pane" id="settings">...
							<ul><li><p></p></li></ul>
						</div>
						<div role="tabpanel" class="tab-pane" id="tasks_customer" style="display:none">...
							<ul id="cabinet_my_tasks_customer" style="width:100%;list-style-type:none" cellspacing="1" cellpadding="1">
							</ul>
						</div>
					</div>

				</div>
				<div id="upd_info2">
				</div>
				<div class="profile-avatar-wrap1">
				</div>
                <p><a class="btn btn-default" href="http://www.yiiframework.com/forum/">create task &raquo;</a></p>
				
			</div>
		</div>
		
	</div>
    </div>
				
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
		sum: <input type="number" value="" style="width:" id="sum1">
		
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="task_list_item3">Save changes</button>
      </div>
    </div>
  </div>
</div>

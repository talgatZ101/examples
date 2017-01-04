<?php

namespace frontend\controllers;

use Yii;
use frontend\models\TasksMarkers;
use frontend\models\TasksMarkersSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\db\command;

/**
 * TasksMarkersController implements the CRUD actions for TasksMarkers model.
 */
class TasksMarkersController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }
	
	public $enableCsrfValidation = false;

    /**
     * Lists all TasksMarkers models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new TasksMarkersSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
		
		$n2=Yii::$app->request->post('coords2');
		$n=Yii::$app->request->post('name1');
		echo $n;

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single TasksMarkers model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new TasksMarkers model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new TasksMarkers();
		$session = Yii::$app->session;
		$marker_type=Yii::$app->request->post('type');
		$n=Yii::$app->request->post('name1');
		$task_id1=Yii::$app->request->post('task_id');
		$marker_name=Yii::$app->request->post('marker_name');
		$marker_id=Yii::$app->request->post('marker_id');
		$address=Yii::$app->request->post('address');
		$ap=Yii::$app->request->post('action');
		$distance=Yii::$app->request->post('distance');
		
		if($ap == "insert"){
			Yii::$app->db->createCommand()->insert('tasks_markers_copy', [
													'lat' => $n[0],
													'lng' => $n[1],
													'marker_name' => $marker_name,
													'marker_type' => $marker_type,
													'address' => $address,
			])->execute();
			$id = Yii::$app->db->getLastInsertID();
		}

		if($ap == "update"){
			$params = [':lat' => $n[0], ':lng' => $n[1], ':address' => $address, 'marker_type' => $marker_type, ':distance' => $distance];
			\Yii::$app->db->createCommand("UPDATE tasks_markers_copy SET lat=:lat,lng=:lng,address=:address,distance=:distance WHERE marker_type = :marker_type")
			->bindValues($params)
			->execute();
		}
   
    }
	
	
	
	
	
	public function actionGetAddress(){
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Credentials: true ");
		header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
		header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
		header('Content-Type: application/json', true);
	
		Yii::$app->controller->enableCsrfValidation = false;
		$task_id=Yii::$app->request->post('task_id');
		$arr=array();
		$addrs = (new \yii\db\Query())
			->select(['tasks_markers.id', 'tasks_markers.address','tasks_markers.marker_type','tasks_markers.task_id','tasks_markers.lat','tasks_markers.lng'])
			->from('tasks_markers')
			->where('tasks_markers.task_id=:task_id')
			->addParams([':task_id' => $task_id])
			->all();
			$arr2["addr"]=$addrs;
		$arr = json_encode($arr2);
		echo $arr;
		
	}
	
	public function actionGetBid(){
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Credentials: true ");
		header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
		header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
		header('Content-Type: application/json', true);
	
		Yii::$app->controller->enableCsrfValidation = false;
		$task_id=Yii::$app->request->post('task_id');
		$auction_id=Yii::$app->request->post('auction_id');
		$auctionData = (new \yii\db\Query())
			->select(['auction_det.id', 'auction_det.user_id','auction_det.sum','user_det.surname'])
			->from('auction_det')
			->join('LEFT JOIN', 'user_det', 'user_det.user_id = auction_det.user_id')
			->where('auction_det.user_id=:user_id AND auction_det.auction_id=:auction_id')
			->addParams([':auction_id' => $auction_id])
			->addParams([':user_id' => \Yii::$app->user->identity->id])
			->all();
		$auctionData = json_encode($auctionData);
		echo $auctionData;
		

	}
	
	
	
	public function actionDeleteTemp(){
			\Yii::$app->db->createCommand("DELETE FROM tasks_markers_copy ")
			->execute();	
	}
	
	
	

    /**
     * Updates an existing TasksMarkers model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing TasksMarkers model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the TasksMarkers model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return TasksMarkers the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = TasksMarkers::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}

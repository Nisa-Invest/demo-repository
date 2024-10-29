interface WidgetColumnProps {
    title: string;
    // tasks?: Task[];
    // onTaskMove?:(taskId: string) => void
}


export function WidgetColumn({title}: WidgetColumnProps){
    return (
      <section className="p4 bg-white rounded-lg shadow">
        <h3 className="text-fontFamily-heading text-lg font-semibold mb-4 flex items-center">
          {title}
          <img
            src=""
            alt="Completed Tasks Column"
            className="ml-2 w-5 h-5"
          ></img>
        </h3>
        <div className="space-y-2">
        {/* //         {tasks.map((task) => (
        //   <div
        //     key={task.id}
        //     className="p-3 bg-gray-100 rounded cursor-move"
        //     draggable
        //     onDragStart={(e) => e.dataTransfer.setData('text/plain', task.id)}
        //     onDragEnd={() => onTaskMove && onTaskMove(task.id)}
        //   >
        //     {task.title}
        //   </div> */}
        </div>
       
      </section>
    );
}
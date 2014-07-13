package com.fenhao.core.account.share;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import com.fenhao.core.account.share.site.schedule.Processor;

public class InitListener implements ServletContextListener {

    public void contextInitialized(ServletContextEvent sce) {
        // String path = sce.getServletContext().getRealPath("/WEB-INF/classes/")+File.separator;
        new Processor().doProcess();
        System.out.println("start");
    }

    public void contextDestroyed(ServletContextEvent sce) {

    }

}
